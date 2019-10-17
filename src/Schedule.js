import React from 'react'
import { FrappeGantt } from 'frappe-gantt-react'

import useFetch from './utils/useFetch'


const Schedule = () => {
		let mode = 'Day'
		const res = useFetch(`http://localhost:3004/data`, {
		    headers: {
		      'Content-Type': 'application/json',
		      'Access-Control-Allow-Origin': '*',
		      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		      'Access-Control-Allow-Methods': 'PUT, GET, POST'

		    }
		  })
		  if (!res.response) {
		    return <>Loading...</>
		  }
        return (
            <div>
                <FrappeGantt
                    tasks={[...res.response.map(p => ({
                		...p,
                    	start: p.start.split('/').reverse().join('-'),
                    	end: p.end.split('/').reverse().join('-')
                    })
                  )]}
                     viewMode={mode}
                    onClick={task => console.log(task)}
                    onDateChange={(task, start, end) => console.log(task, start, end)}
                    onProgressChange={(task, progress) => console.log(task, progress)}
                    onTasksChange={tasks => console.log(tasks)}
                />
                {console.log([...res.response.map(p => ({
                		...p,
                    	start: p.start.split('/').reverse().join('-'),
                    	end: p.end.split('/').reverse().join('-')
                    })
                  )])}
            </div>

        )
}

export default Schedule