'use client';

import { useSearchParams } from 'next/navigation';
import { ConsultationForm } from '@/components/ConsultationForm';

export default function BookConsultationClient() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service') ?? undefined;

  return <ConsultationForm defaultService={service} />;
}