import { incrementByAmount } from "@/utils/redux/counterSlice"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button/Button"

const Home = () => {

    // Wajib di inisiasi dulu kalau pake dispatch (jangan lupa diimport , liat diatas)
    const dispatch = useDispatch()
    // Ini kalau mau ambil nilai valuenya
    const count = useSelector(state => state.counter.value)

    return (
        <>
            <h1>HOME</h1>
            {/* liat dispatch disini namanya sesuai yang tadi kita buat di counterslice */}
            <Button onClick={() => dispatch(incrementByAmount(10))}>Contoh penggunaan redux</Button>

            <h1>Hasilnya : {count} </h1>
        </>
    )
}

export default Home