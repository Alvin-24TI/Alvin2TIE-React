import PageHeader from "../components/PageHeader"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <PageHeader />
            
            <div className="flex flex-col items-center justify-center mt-20 px-4 text-center">
                {/* Angka 404 */}
                <h1 className="text-8xl font-bold text-emerald-500 tracking-tighter">
                    404
                </h1>
                
                {/* Pesan Error */}
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Page NotFound
                    </h2>
                    <p className="mt-2 text-gray-600 max-w-sm">
                        Stupid ASS
                    </p>
                </div>

                {/* Tombol Hijau */}
                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-md shadow transition-colors duration-200"
                    >
                        Back
                    </Link>
                </div>
            </div>
        </div>
    )
}