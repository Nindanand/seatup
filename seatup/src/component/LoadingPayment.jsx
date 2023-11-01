import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingPayment = () => {
    return (
        <div className="fixed w-full h-screen -mt-3 bg-merah">
            <div className="flex -mt-10 h-full items-center justify-center">
                <div className="flex flex-col w-11/12 lg:w-1/3 h-1/2 bg-white rounded-lg text-center items-center justify-center">
                    <FontAwesomeIcon icon={faSpinner} spin className="text-kuning text-9xl" />
                    <div className="my-10 font-bold text-merah text-2xl">
                        Pembayaran Sedang Diproses
                    </div>
                    <div className="text-sm border-2 border-black rounded-lg py-2 w-10/12">
                        Mohon untuk tidak menutup jendela ini
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingPayment;