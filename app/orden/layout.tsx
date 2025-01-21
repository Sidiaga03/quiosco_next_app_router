import OrdenSidebar from "@/components/orden/OrdenSidebar";
import OrdenSummary from "@/components/orden/OrdenSummary";
import ToastNotification from "@/components/ui/ToastNotification";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {

    return(
        <>
            <div className="md:flex">
                <OrdenSidebar/>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                    {children}
                </main>

                <OrdenSummary/>
            </div>

            <ToastNotification/>
        </>
    )
}