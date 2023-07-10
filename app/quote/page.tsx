async function getData() {
    const headers: Record<string, string> = {
        'X-Api-Key': 'w6VJIY7fOkA/fiwbLjEx3Q==RFsgiiB6y2x6MihJ',
      };
    
    const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
        headers,cache:'no-store'
      })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const QuotePage = async ()=>{
      const data= await getData();
      const [{quote,author}]=data;
    return (
    <div className='flex p-5 mt-20  items-center justify-center'>
     <div className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <p className="font-normal text-gray-700 dark:text-gray-400">
    “{quote}” --<span>{author}</span>
      </p>
    </div>
    </div>
    )
    }
    
    export default QuotePage