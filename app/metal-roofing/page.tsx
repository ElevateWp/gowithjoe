import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export async function generateMetadata(): Promise<Metadata> { return getServiceMetadata('metal-roofing'); }
export default function MetalRoofingPage() { return <ServiceLandingPage slug="metal-roofing" />; }



