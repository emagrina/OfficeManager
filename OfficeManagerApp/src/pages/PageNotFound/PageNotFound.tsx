import React from 'react';
// @ts-ignore
import Image from '../../assets/img/void.svg';

function PageNotFound() {
	return (
		<div className='pageNotFoundBody'>
			<div className='pageNotFoundText'>
				<section className='pageNotFound1'>404</section>
				<section className='pageNotFound2'>Page Not Found</section>
				<section className='pageNotFound3'>
					<a href={'/home'}>Back Home →</a>
				</section>
			</div>
			<div className='pageNotFoundImage'>
				<img src={Image} alt='Error 404' />
			</div>
		</div>
	);
}

export default PageNotFound;
