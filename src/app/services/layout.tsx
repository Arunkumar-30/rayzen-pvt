import ServicesBanner from "@/components/Services/ServicesBanner";
import Aside from "@/components/ui-section/Aside";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServicesBanner />

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* Aside */}
        <aside className="lg:col-span-1 order-2 lg:order-1">
          <Aside />
        </aside>

        {/* Content */}
        <main className="lg:col-span-4 order-1 lg:order-2">
          {children}
        </main>

      </div>
    </>
  );
}
