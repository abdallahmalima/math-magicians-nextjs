const CalculatorPageLayout = ({
    children,
  }: {
    children: React.ReactNode
  })=>{

    return (
    <main className="flex flex-col sm:flex-row p-5 items-center justify-center lg:px-20">
    <h3 className="text-2xl font-medium m-auto">Let&apos;s do some math!</h3>
    <div className="mt-10">
    {children}
    </div>
   </main>
    )
    }
    
    export default CalculatorPageLayout