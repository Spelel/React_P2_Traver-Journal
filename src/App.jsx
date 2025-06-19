import Header from './components/header'
import Item from './components/Item'
import data from './data'

function App() {
    const dataObj = data.map((item) => {
        return <Item
        key={item.id}
        item={item}
        />
    })
    return (
        <>
        <Header />
        {dataObj}
        </>
    )
}
export default App