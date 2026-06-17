import axios from 'axios'

const API_URL = "https://kxigmchyywmadjfzhjog.supabase.co/rest/v1/Login"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aWdtY2h5eXdtYWRqZnpoam9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYyNjUsImV4cCI6MjA5NzIxMjI2NX0.nudkRuNPiKI3_F4EZAV3LljG2yQL24igcYcnbgo3lzg"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }

}