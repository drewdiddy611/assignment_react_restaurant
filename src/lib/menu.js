import React from 'react';
import MenuItem from './menu-item';

const MenuDisplay = () => {
	const menuItems = [
		{
			name: 'Finest Pizza',
			imageSrc:
				'https://jimsplacepizza.com/wp-content/uploads/2014/05/image.jpeg',
			desc: 'Amazing, yummy pizza',
			price: 5000.0
		},
		{
			name: 'Finest Lasagna',
			imageSrc:
				'http://1.bp.blogspot.com/-AHLy82PR_5g/Tz_Pxyw4ueI/AAAAAAAAAn0/K4d24Mba3mE/s1600/raw_lasagna.jpg',
			desc: 'Decadent, illustrious lasagna',
			price: 10000.0
		},
		{
			name: 'Finest Alfredo',
			imageSrc:
				'http://www.cupcakediariesblog.com/wp-content/uploads/2016/02/shrimp-fettuccine-alfredo-2.jpg',
			desc: 'Smooth, creamy Alfredo',
			price: 15000.0
		},
		{
			name: 'Finest Shrimp',
			imageSrc:
				'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2007/08/fine-dining-restaurants-kw.gif',
			desc: 'Fresh, delicious shrimp',
			price: 100000.0
		}
	];
	return (
		<div>
			<div className="page-header">
				<h1 className="text-center" id="menu">
					Our Menu
				</h1>
			</div>
			{menuItems.map(item =>
				<div className="row" key={item.name}>
					<div className="col-md-10 col-md-offset-1">
						<MenuItem
							imageSrc={item.imageSrc}
							name={item.name}
							price={item.price}
							desc={item.desc}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default MenuDisplay;
