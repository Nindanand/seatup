import { PriceDisplay } from "../Cart/PriceDisplay";

export const RincianPembayaran = ({items}) => {
    const total = items.reduce(
        (partialSum, item) => partialSum + item.price * item.quantity,
        0
      );

    const totalPrice = total + 1000 + (total*11/100);
    return (
        <>
            <div className="xl:mx-7">
                <div className="flex justify-between my-2">
                    <h2 className="text-sm xl:text-lg">Nomor Order</h2>
                    <h2 className="text-sm xl:text-lg">A109928817762S</h2>
                </div>
                <div className="flex justify-between my-2">
                    <h2 className="text-sm xl:text-lg">Harga</h2>
                    <h2 className="text-sm xl:text-lg"><PriceDisplay value={total}/></h2>
                </div>
                <div className="flex justify-between my-2">
                    <h2 className="text-sm xl:text-lg">Biaya Layanan & Lainnya</h2>
                    <h2 className="text-sm xl:text-lg">Rp1.000,00</h2>
                </div>
                <div className="flex justify-between my-2">
                    <h2 className="text-sm xl:text-lg">Kursi Reguler</h2>
                    <h2 className="text-sm xl:text-lg">A1</h2>
                </div>
                <div className="flex justify-between xl:mt-2 xl:pb-6 border-b-kuning border-b-2 border-opacity-60 pb-3">
                    <h2 className="text-sm xl:text-lg">PPN 11%</h2>
                    <h2 className="text-sm xl:text-lg"><PriceDisplay value={(11/111) * totalPrice} /></h2>
                </div>
                <div className="flex justify-end xl:mt-2 xl:mb-5 pt-2">
                    <h2 className="text-sm xl:text-lg"><PriceDisplay value={totalPrice}/></h2>
                </div>
            </div>
        </>
    )
}