'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { services } from '@/data/services';
import { consultationSchema, ConsultationInput } from '@/lib/validation';

type Props = { defaultService?: string };

const fields = 'w-full rounded-xl border border-white/15 bg-zinc-900/70 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-gold-500';

export function ConsultationForm({ defaultService }: Props) {
  const [success, setSuccess] = useState('');
  const {
    register,
    watch,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<ConsultationInput>({
    defaultValues: {
      service: defaultService || services[0].title
    }
  });

  const selectedService = watch('service');
  const selectedSubServices = useMemo(
    () => services.find((service) => service.title === selectedService)?.subServices ?? services[0].subServices,
    [selectedService]
  );

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
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const message = `Hello TGEC, I would like to book a consultation.\nName: ${payload.fullName}\nCompany: ${payload.companyName || '-'}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nService: ${payload.service}\nSub-service: ${payload.subService}\nPreferred Date: ${payload.preferredDate}\nPreferred Time: ${payload.preferredTime}\nMessage: ${payload.message || '-'}`;
    window.open(`https://wa.me/27691928919?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');

    if (response.ok) {
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
            <option key={service.slug} value={service.title}>{service.title}</option>
          ))}
        </select>
      </div>
      <div>
        <select className={fields} {...register('subService')}>
          {selectedSubServices.map((subService) => (
            <option key={subService} value={subService}>{subService}</option>
          ))}
        </select>
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
        <button disabled={isSubmitting} className="rounded-full bg-gold-metallic px-6 py-3 font-semibold text-zinc-950 disabled:opacity-60">
          {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
        </button>
      </div>
      {success ? <p className="md:col-span-2 text-sm text-gold-400">{success}</p> : null}
    </form>
  );
}
