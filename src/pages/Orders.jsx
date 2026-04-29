import PageHeader from "../components/PageHeader"
import OrderData from "../DataOrder.json";

export default function Orders() {
    // Fungsi untuk warna status
    const getStatusStyle = (status) => {
        switch (status.toLowerCase()) {
            case 'completed': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
            case 'pending': return 'bg-amber-100 text-amber-700 border-amber-200';
            case 'cancelled': return 'bg-rose-100 text-rose-700 border-rose-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    // Fungsi format rupiah
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader />
            
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Daftar Pesanan</h1>
                        <p className="text-gray-500 mt-1">Pantau semua transaksi masuk dan status pengiriman.</p>
                    </div>
                    <div className="mt-4 md:mt-0 px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-200 text-sm font-medium text-gray-600">
                        Total Pesanan: <span className="text-emerald-600 font-bold">{OrderData.length}</span>
                    </div>
                </div>

                <div className="space-y-4">
                    {OrderData.map((item) => (
                        <div 
                            key={item.OrderID} 
                            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                        >
                            <div className="p-5 md:flex md:items-center md:justify-between gap-4">
                                {/* Info Utama */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-sm font-bold text-emerald-600 px-2 py-1 bg-emerald-50 rounded">
                                            {item.OrderID}
                                        </span>
                                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getStatusStyle(item.Status)}`}>
                                            {item.Status.toUpperCase()}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">{item.CustomerName}</h3>
                                </div>

                                {/* Detail Harga & Tanggal */}
                                <div className="mt-4 md:mt-0 flex flex-row md:flex-col justify-between md:text-right border-t md:border-t-0 pt-4 md:pt-0">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Total Tagihan</p>
                                        <p className="text-lg font-black text-gray-900">{formatCurrency(item.TotalPrice)}</p>
                                    </div>
                                    <div className="md:mt-2">
                                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold md:hidden text-right">Tanggal</p>
                                        <div className="flex items-center text-sm text-gray-500 md:justify-end">
                                            <svg className="w-4 h-4 mr-1.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            {item.OrderDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}