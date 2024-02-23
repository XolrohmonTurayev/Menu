import React from 'react'
import { Button, Rating } from '@material-tailwind/react';
const ProductCard = ({ title, image, description, price, }) => {
    return (
        <div className='flex flex-col items-center justify-between border-solid border-[1px] rounded-md border-dark px-5' >
            <img
                src={image}
                alt={title}
                className="max-w-[360px] h-[445px] object-contain"
            />
            <div className=''>
                <div className='flex justify-center items-center gap-5 mb-5'>
                    <h3 className='font-bold text-2xl max-w-[350px]'>{title}</h3>
                    <div className='font-bold text-2xl border-solid border-dark'>{price}$</div>
                </div>
                <p className='font-normal text-base text-left text-dark mb-5'>{description}</p>
                <div className='w-[300px] flex flex-row items-center justify-around mb-10 mr-[80px]'>
                    <Button
                        className='bg-orange font-medium text-xl flex justify-center items-center p-3 text-white rounded-md leading-none'>
                        +
                    </Button>
                    <Rating className='size-5' value={4} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;