'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { services } from '@/data/services';
import { consultationSchema, ConsultationInput } from '@/lib/validation';
import { CONTACT_CONFIG } from '@/lib/contactConfig';

type Props = { defaultService?: string };

const fields =
  'w-full rounded-xl border border-white/15 bg-zinc-900/70 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-gold-500';

async function postJson(url: string, payload: unknown) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  let json: any = null;
  try {
    json = await res.json();
  } catch {
    // ignore non-json responses
  }

  return { ok: res.ok, status: res.status, json };
}

// subServices can be either string[] or { title: string }[]
function normalizeSubServices(input: unknown): string[] {
  if (!Array.isArray(input)) return [];
  return input
    .map((item) => {
      if (typeof item === 'string') return item;
      if (item && typeof item === 'object' && 'title' in (item as any)) return String((item as any).title);
      return '';
    })
    .filter(Boolean);
}

export function ConsultationForm({ defaultService }: Props) {
  const [success, setSuccess] = useState('');

  const {
    register,
    watch,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<ConsultationInput>({
    defaultValues: {
      service: defaultService || services[0]?.title
    }
  });

  const selectedService = watch('service');

  const selectedSubServices = useMemo(() => {
    const match = services.find((service) => service.title === selectedService);
    const fallback = services[0];
    return normalizeSubServices(match?.subServices ?? fallback?.subServices ?? []);
  }, [selectedService]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess('');

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const parsed = consultationSchema.safeParse(data);

    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ConsultationInput;
        setError(path, { message: issue.message });
      });
      return;
    }

    const payload = parsed.data;

    // Email delivery:
    // 1) Try Vercel Next.js API route
    // 2) If it fails, try shared-hosting PHP endpoint
    let emailOk = false;

    try {
      const r1 = await postJson(CONTACT_CONFIG.API_ENDPOINT_VERCEL, payload);
      if (r1.ok) emailOk = true;
    } catch {
      // ignore and fall back
    }

    if (!emailOk) {
      try {
        const r2 = await postJson(CONTACT_CONFIG.API_ENDPOINT_SHARED, payload);
        if (r2.ok) emailOk = true;
      } catch {
        // ignore
      }
    }

    // Always open WhatsApp as a reliable fallback path
    const message = `Hello TGEC, I would like to book a consultation.
Name: ${payload.fullName}
Company: ${payload.companyName || '-'}
Phone: ${payload.phone}
Email: ${payload.email}
Service: ${payload.service}
Sub-service: ${payload.subService}
Preferred Date: ${payload.preferredDate}
Preferred Time: ${payload.preferredTime}
Message: ${payload.message || '-'}`;

    window.open(
      `https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );

    if (emailOk) {
      setSuccess('Thanks. Your consultation request has been submitted. We will contact you shortly.');
      event.currentTarget.reset();
    } else {
      setSuccess('Your WhatsApp request was prepared, but email delivery failed. Please contact us directly.');
    }
  };

  return (
    <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
      <div>
        <input className={fields} placeholder="Full Name" {...register('fullName')} />
        {errors.fullName && <p className="mt-1 text-sm text-red-300">{errors.fullName.message}</p>}
      </div>

      <div>
        <input className={fields} placeholder="Company Name (optional)" {...register('companyName')} />
      </div>

      <div>
        <input className={fields} placeholder="Phone Number" {...register('phone')} />
        {errors.phone && <p className="mt-1 text-sm text-red-300">{errors.phone.message}</p>}
      </div>

      <div>
        <input className={fields} placeholder="Email Address" {...register('email')} />
        {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>}
      </div>

      <div>
        <select className={fields} {...register('service')}>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-sm text-red-300">{errors.service.message}</p>}
      </div>

      <div>
        <select className={fields} {...register('subService')}>
          {selectedSubServices.map((subService) => (
            <option key={subService} value={subService}>
              {subService}
            </option>
          ))}
        </select>
        {errors.subService && <p className="mt-1 text-sm text-red-300">{errors.subService.message}</p>}
      </div>

      <div>
        <input type="date" className={fields} {...register('preferredDate')} />
        {errors.preferredDate && <p className="mt-1 text-sm text-red-300">{errors.preferredDate.message}</p>}
      </div>

      <div>
        <input type="time" className={fields} {...register('preferredTime')} />
        {errors.preferredTime && <p className="mt-1 text-sm text-red-300">{errors.preferredTime.message}</p>}
      </div>

      <div className="md:col-span-2">
        <textarea className={fields} rows={4} placeholder="Message (optional)" {...register('message')} />
      </div>

      <div className="md:col-span-2">
        <button
          disabled={isSubmitting}
          className="rounded-full bg-gold-metallic px-6 py-3 font-semibold text-zinc-950 disabled:opacity-60"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
        </button>
      </div>

      {success ? <p className="md:col-span-2 text-sm text-gold-400">{success}</p> : null}
    </form>
  );
}