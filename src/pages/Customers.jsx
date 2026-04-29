import PageHeader from "../components/PageHeader";
import CustomerData from "../DataCustomer.json";

export default function Customers() {
    const getLoyaltyColor = (loyalty) => {
        switch (loyalty.toLowerCase()) {
            case 'gold': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'silver': return 'bg-gray-100 text-gray-700 border-gray-200';
            case 'bronze': return 'bg-orange-100 text-orange-700 border-orange-200';
            default: return 'bg-blue-100 text-blue-700 border-blue-200';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader />
            
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Data Pelanggan</h1>
                        <p className="text-gray-500 mt-1">Daftar lengkap profil dan status loyalitas pelanggan.</p>
                    </div>
                    <div className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 inline-block self-start">
                        {CustomerData.length} Total Pelanggan
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CustomerData.map((item) => (
                        <div 
                            key={item.CustomerID} 
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-emerald-200 transition-all duration-300 group"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-5">
                                    <div className="h-14 w-14 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                                        {item.CustomerName.charAt(0)}
                                    </div>
                                    <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getLoyaltyColor(item.Loyalty)}`}>
                                        {item.Loyalty.toUpperCase()}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold text-gray-800 leading-tight">
                                    {item.CustomerName}
                                </h2>
                                <p className="text-sm text-emerald-600 font-semibold mb-6">{item.CustomerID}</p>

                                <div className="space-y-4 border-t border-gray-50 pt-5">
                                    <div className="flex items-center text-gray-600">
                                        <div className="p-2 bg-gray-50 rounded-lg mr-3">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm truncate">{item.Email}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <div className="p-2 bg-gray-50 rounded-lg mr-3">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm">{item.Phone}</span>
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