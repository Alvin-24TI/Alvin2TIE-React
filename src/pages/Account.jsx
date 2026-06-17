import { notesAPI } from "../services/notesAPI"
import { useEffect, useState } from "react"

import { AiFillDelete } from "react-icons/ai";

import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";
import GenericTable from "../components/GenericTable";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Account() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [notes, setNotes] = useState([])

    const [dataForm, setDataForm] = useState({
        title: "", content: "", status: ""
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
            setDataForm({ title: "", content: "", status: "" })

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
        <h1></h1>
    )
}
