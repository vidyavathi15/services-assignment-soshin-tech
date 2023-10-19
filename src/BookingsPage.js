import React, { useEffect , useState} from 'react'

const BooksPage = () => {
    const [userBookName, setUserBookName] = useState("")
    const [bookingsList, setBookingsList ]= useState([])

const createBooks=  async() =>{
   
    try{
        const options = {
            method:"POST",
            headers:{
                "Application":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:userBookName})
        }
        const bookRes = await fetch("http://localhost:6000/api/bookings", options)
        if (!bookRes.ok){
            throw new Error(`Failed to fetch services List. Status: ${bookRes.status}`)
        }
        const bookingJson= await bookRes.json()
        console.log("booking is Created", bookingJson )
    

    }
    catch(err) {
        console.error("Error fetching creating Book:", err)

          }


    }

    
   


const getBooksList =  async() =>{
    try{
        const bookResList = await fetch("http://localhost:6000/api/allbookings")
        if (! bookResList.ok){
            throw new Error(`Failed to fetch services List. Status: ${bookResList.status}`)

        }
        const bookingJson2= await bookResList.json()
        setBookingsList(bookingJson2)
    

    }
    catch(err){
        console.error("Error fetching Booking List:", err)

    }
   
   
}

    useEffect(() =>{
        getBooksList()

    }, [])
  return (
    <div>
        <h1> BooksPage</h1>
        <input type="text"  value={userBookName} onChange= {(e) => setUserBookName(e.target.name)}/>
        <button type="text" onClick={createBooks}>AddBOOking</button>
        {bookingsList.map((each, index) => (
            <div key={index}>
                <h1>{each.bookName}</h1>
                </div>
        ))}
        
        </div>
  )
}

export default BooksPage