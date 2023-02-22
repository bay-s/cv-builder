import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import akun from '../img/akun.jpg'

const UploadAvatar = () => {
   const {value} = useContext(AppContext)

      return(
 <div class="field is-flex flex-column gap-1">
        <figure class="image is-128x128 avatar">
        <img class="is-rounded edit-image h-100" src={value.data.imgUpload !== '' ? value.data.imgUpload : akun}  alt="profile"/>
        </figure>
        <div class="file is-small  is-flex flex-column gap-1 is-info">
        <label class="file-label">
        <input class="file-input" type="file" name="resume" onChange={value.ImageChange}/>
        <span class="file-cta">
        <span class="file-icon">
        <i class="fa fa-upload"></i>
        </span>
        <span class="file-label  px-2">
          Change Image
        </span>
        </span>
  
        </label>

    </div>
</div>
    
                )
}

export default  UploadAvatar;