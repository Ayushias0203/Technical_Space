import React from 'react'
import './Widget.css'
import WidgetContent from './WidgetContent'

function Widget() {
  return (
    <div className='widget'>
        <div className='widget__header'>
            <h5>Spaces to follow</h5>
        </div>
        <WidgetContent/>
        <WidgetContent/>
        <WidgetContent/>
    </div>
  )
}

export default Widget