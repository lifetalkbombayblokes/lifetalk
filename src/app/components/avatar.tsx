import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/Frame 5.png'
import img2 from '@/assets/Frame 6.png'
import img3 from '@/assets/Frame 7.png'
import img4 from '@/assets/Frame 8.png'
const avatarData = [img1, img2, img3, img4
]

const Avatar = () => {
    return (
        <div>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                {avatarData.map((img, index) => <div key={index} className="avatar border-none">
                    <div className="w-12 grayscale">
                        <Image width={100} height={100} alt='avataar' src={img} />
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Avatar
