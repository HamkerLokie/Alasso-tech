import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import './css/unit.css'

const Unit = ({ category, catName }) => {
  useEffect(() => {
    toast.success(`ALL ${catName.toUpperCase() + 'S'}`)
  },[])

  const downloadFile = (link, title) => {
    window.location.assign(link)
    toast.success(`DOWNLOADED`)
  }

  return (
    <div className='unit-pop-wrap'>
      <div className='units unit1'>
        <span>Unit 1</span>
        {category.length > 0 ? (
          category.map(i => {
            if (i.unit === 1)
              return category.length > 0 ? (
                <div className='showMaterial'>
                  <div className='material'>{i.title}</div>
                  <a href='#/' onClick={() => downloadFile(i.link, i.title)}>
                    Download
                  </a>
                </div>
              ) : (
                <div>No data to Show</div>
              )
          })
        ) : (
          <div className='no-content'>No content to show</div>
        )}
      </div>

      <div className='units unit2'>
        <span>Unit 2</span>
        {category.length > 0 ? (
          category.map(i => {
            if (i.unit === 2)
              return category.length > 0 ? (
                <div className='showMaterial'>
                  <div className='material'>{i.title}</div>
                  <a href='#/' onClick={() => downloadFile(i.link)}>
                    Download
                  </a>
                </div>
              ) : (
                <div>No data to Show</div>
              )
          })
        ) : (
          <div className='no-content'>No content to show</div>
        )}
      </div>
      <div className='units unit3'>
        <span>Unit 3</span>
        {category.length > 0 ? (
          category.map(i => {
            if (i.unit === 3)
              return i.unit === 3 ? (
                <div className='showMaterial'>
                  <div className='material'>{i.title}</div>
                  <a href='#/' onClick={() => downloadFile(i.link)}>
                    Download
                  </a>
                </div>
              ) : (
                <div>No data to Show</div>
              )
          })
        ) : (
          <div className='no-content'>No content to show</div>
        )}
      </div>
    </div>
  )
}

export default Unit
