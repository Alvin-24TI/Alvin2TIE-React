import { notesAPI } from "../../services/notesAPI"
import { useEffect, useState } from "react"

import { AiFillDelete } from "react-icons/ai";

import AlertBox from "../../components/AlertBox";
import EmptyState from "../../components/EmptyState";
import GenericTable from "../../components/GenericTable";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function Register() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [notes, setNotes] = useState([])

    const [dataForm, setDataForm] = useState({
        Nama: "", Password: ""
    })

    // Handle perubahan nilai input form
    const handleChange = (evt) => {
        const { name, value } = evt.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            await notesAPI.createNote(dataForm)

            setSuccess("Catatan berhasil ditambahkan!")

            // Kosongkan Form setelah Success
            setDataForm({ Nama: "", Password: "" })

            // Hilangkan pesan Success setelah 3 detik
            setTimeout(() => setSuccess(""), 3000)

            //Panggil Ulang loadNotes untuk refresh data
            loadNotes()

        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false)
        }
    }

    // Load data saat pertama di-render
    useEffect(() => {
        loadNotes()
    }, [])

    // Memanggil fetchNotes beserta error/loading handling
    const loadNotes = async () => {
        try {
            setLoading(true)
            setError("")
            const data = await notesAPI.fetchNotes()
            setNotes(data)
        } catch (err) {
            setError("Gagal memuat catatan")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    // Handle untuk aksi hapus data
    const handleDelete = async (id) => {
        const konfirmasi = confirm("Yakin ingin menghapus catatan ini?")
        if (!konfirmasi) return

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            await notesAPI.deleteNote(id)

            // Refresh data
            loadNotes()
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }


    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Create Your Account ✨
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email Address
                    </label>
                    <input
                        disabled={loading}
                        type="email"
                        id="email"
                        name="Nama"
                        value={dataForm.Nama}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password
                    </label>
                    <input
                        disabled={loading}
                        type="password"
                        id="password"
                         name="Password"
                        value={dataForm.Password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
                        placeholder="********"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Confirm Password
                    </label>
                    <input
                        disabled={loading}
                        type="password"
                        id="confirmPassword"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
                        placeholder="********"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4
                        rounded-lg transition duration-300"
                >
                    {loading ? "Mohon Tunggu..." : "Register"}
                </button>
            </form>
        </div>
    )
}
