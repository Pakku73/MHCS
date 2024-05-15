export const Chiffres = () => {
    return <>
    
    <section className="flex flex-col items-center max-w-screen-2xl m-auto mt-[100px] gap-10">

        <h2 className="flex flex-col font-Arial text-center text-[20px]">
            Quelques chiffres clés
        </h2>

        <div className="flex justify-between items-center">
            <div className="border-[2px] border-[#ada796] p-2 pl-10 rounded-[4px]">
                <p className="bg-[#fffcf8] font-ChangeOne text-[#ada796] text-[20px] -translate-y-9 translate-x-[60px]">+20 ANS</p>
                <h2 className="uppercase font-ChangeOne text-[20px]">D'expertises</h2>
            </div>

            <div className="border-[2px] border-[#ada796] p-2 pl-10 rounded-[4px] mr-[50px] ml-[100px] text-end">
                <p className="bg-[#fffcf8] font-ChangeOne text-[#ada796] text-[30px] -translate-y-9 translate-x-[10px]">+188</p>
                <h2 className="uppercase font-ChangeOne text-[20px]">CHANTIERS RÉALISÉS</h2>
                <p className="uppercase font-ChangeOne text-[18px]">EN 2023</p>
            </div>

            <div className="border-[2px] border-[#ada796] p-2 pl-10 rounded-[4px] mr-[100px] ml-[50px] text-end">
                <p className="bg-[#fffcf8] font-ChangeOne text-[#ada796] text-[30px] -translate-y-9 translate-x-[10px] text-right">+37</p>
                <h2 className="uppercase font-ChangeOne text-[20px]">CLIENTS</h2>
                <p className="uppercase font-ChangeOne text-[15px]">EN 2023</p>
            </div>

            <div className="border-[2px] border-[#ada796] p-2 pl-10 rounded-[4px]">
            <p className="bg-[#fffcf8] font-ChangeOne text-[#ada796] text-[30px] -translate-y-9 translate-x-[10px] text-right">+15</p>
                <h2 className="uppercase font-ChangeOne text-[20px]">PARTENAIRES</h2>
            </div>

        </div>

    </section>
  
    </>;
  };