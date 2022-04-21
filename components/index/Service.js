import React from 'react';
import Image from 'next/image';

function Service({ title, content, imageUrl }) {
    return (
        <div>
            <div className="mb-2">
                <Image src={imageUrl} width="30px" height="30px" alt={title} />
            </div>
            <h3 className="mb-4 font-semibold text-xl">{title}</h3>
            <p className="text-slate-600">{content}</p>
        </div>

    )
}

export default Service;