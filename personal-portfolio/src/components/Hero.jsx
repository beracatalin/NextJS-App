import ThemeToggle from "@/theme/theme-toggle";
export default function Hero(){
    return(
        
        <>
        <div className="fixed w-full h-auto inset-0 -z-50">
            <div className="absolute inset-0 bg-[url('/light.png')] bg-cover dark:opacity-0 transition-opacity duration-1000" />
            <div className="absolute inset-0 bg-[url('/dark.png')] bg-cover opacity-0 dark:opacity-100 transition-opacity duration-1000" />
        </div>

        <section id="hero" className="space-x-section bg-100  w-full h-auto flex flex-col justify-center items-center">

            <span className="fixed top-5 right-5"><ThemeToggle /></span>
            <h1 className="relative text-center top-50 text-bold text-4xl font-sans">Salutare! Eu sunt Cătălin, <br /> absolvent de licență și master în domeniul IT. </h1>
            <div className="relative flex flex-col-2 gap-10 py-5 px-5 top-50 ">
                <button className="cursor-pointer transform border-2 border-white rounded-xl h-10 w-30 backdrop:blur-16 backdrop-blur-md shadow-xl transition duration-300 hover:scale-105">Proiecte</button>
                <button className="cursor-pointer transform border-2 border-white rounded-xl h-10 w-30 backdrop:blur-16 backdrop-blur-md shadow-xl transition duration-300 hover:scale-105">Contact</button>
            </div>
        <section id="about" className="space-x-section">
            <div className="container">
            <h3 className="text-5xl font-semibold relative top-250 right-160 mb-15 dark:text-white">Despre Mine</h3>
            </div>
        </section>
        </section>
        </>
    )
}