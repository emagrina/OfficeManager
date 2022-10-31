import React, { useState } from 'react';
import Seats from '../../../api/seats.json';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const MapImgHome = () => {
	const [selection, setSelection] = useState(0);
	return (
		<div className={'mapImgHome'}>
			<svg
				viewBox='0 0 1078 434'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clip-path='url(#clip0_137_230)'>
					<g filter='url(#filter0_d_137_230)'>
						<rect width='1078' height='434' rx='12' fill='#F5F5F5' />
					</g>
					<g filter='url(#filter1_d_137_230)'>
						<path
							d='M1036 171C1042.63 171 1048 176.373 1048 183V395C1048 401.627 1042.63 407 1036 407H1001C994.373 407 989 401.627 989 395V183C989 176.373 994.373 171 1001 171H1036Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter2_d_137_230)'>
						<path
							d='M941 171C947.627 171 953 176.373 953 183V395C953 401.627 947.627 407 941 407H906C899.373 407 894 401.627 894 395V183C894 176.373 899.373 171 906 171H941Z'
							fill='white'
						/>
					</g>
					<line
						x1='857.034'
						y1='407.008'
						x2='856'
						y2='161.008'
						stroke='white'
						stroke-width='4'
					/>
					<path d='M816.034 407L815 161' stroke='white' stroke-width='30' />
					<path d='M766.034 407L765 161' stroke='white' stroke-width='60' />
					<g filter='url(#filter3_d_137_230)'>
						<path
							d='M78.7856 21C85.413 21 90.7856 26.3726 90.7856 33V66C90.7856 72.6274 85.4131 78 78.7856 78H43.4999C36.8725 78 31.4999 72.6274 31.4999 66V33C31.4999 26.3726 36.8725 21 43.4999 21L78.7856 21Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter4_d_137_230)'>
						<path
							className={
								Seats.seats[0].Disponible == true ? 'disponible' : 'reservado'
							}
							d='M50.5 31C51.6046 31 52.5 31.8954 52.5 33V41C52.5 42.1046 51.6046 43 50.5 43H42.5C41.3954 43 40.5 42.1046 40.5 41V33C40.5 31.8954 41.3954 31 42.5 31H50.5Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter5_d_137_230)'>
						<path
							className={
								Seats.seats[1].Disponible == true ? 'disponible' : 'reservado'
							}
							d='M50.5 56C51.6046 56 52.5 56.8954 52.5 58V66C52.5 67.1046 51.6046 68 50.5 68H42.5C41.3954 68 40.5 67.1046 40.5 66V58C40.5 56.8954 41.3954 56 42.5 56H50.5Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter6_d_137_230)'>
						<path
							className={
								Seats.seats[2].Disponible == true ? 'disponible' : 'reservado'
							}
							d='M79.5 56C80.6046 56 81.5 56.8954 81.5 58V66C81.5 67.1046 80.6046 68 79.5 68H71.5C70.3954 68 69.5 67.1046 69.5 66V58C69.5 56.8954 70.3954 56 71.5 56H79.5Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter7_d_137_230)'>
						<path
							className={
								Seats.seats[3].Disponible == true ? 'disponible' : 'reservado'
							}
							d='M79.5 31C80.6046 31 81.5 31.8954 81.5 33V41C81.5 42.1046 80.6046 43 79.5 43H71.5C70.3954 43 69.5 42.1046 69.5 41V33C69.5 31.8954 70.3954 31 71.5 31H79.5Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter8_d_137_230)'>
						<path
							d='M173.072 21C179.699 21 185.072 26.3726 185.072 33V66C185.072 72.6274 179.699 78 173.072 78H137.786C131.158 78 125.786 72.6274 125.786 66V33C125.786 26.3726 131.158 21 137.786 21L173.072 21Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter9_d_137_230)'>
						<path
							className={
								Seats.seats[4].Disponible == true ? 'disponible' : 'reservado'
							}
							d='M144.786 31C145.89 31 146.786 31.8954 146.786 33V41C146.786 42.1046 145.89 43 144.786 43H136.786C135.681 43 134.786 42.1046 134.786 41V33C134.786 31.8954 135.681 31 136.786 31H144.786Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter10_d_137_230)'>
						<path
							className={
								Seats.seats[5].Disponible == true ? 'disponible' : 'reservado'
							}
							d='M144.786 56C145.89 56 146.786 56.8954 146.786 58V66C146.786 67.1046 145.89 68 144.786 68H136.786C135.681 68 134.786 67.1046 134.786 66V58C134.786 56.8954 135.681 56 136.786 56H144.786Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter11_d_137_230)'>
						<path
							className={
								Seats.seats[6].Disponible == true ? 'disponible' : 'reservado'
							}
							d='M173.786 56C174.89 56 175.786 56.8954 175.786 58V66C175.786 67.1046 174.89 68 173.786 68H165.786C164.681 68 163.786 67.1046 163.786 66V58C163.786 56.8954 164.681 56 165.786 56H173.786Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter12_d_137_230)'>
						<path
							className={'seatMap'}
							d='M173.786 31C174.89 31 175.786 31.8954 175.786 33V41C175.786 42.1046 174.89 43 173.786 43H165.786C164.681 43 163.786 42.1046 163.786 41V33C163.786 31.8954 164.681 31 165.786 31H173.786Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter13_d_137_230)'>
						<path
							d='M267.357 21C273.985 21 279.357 26.3726 279.357 33V66C279.357 72.6274 273.985 78 267.357 78H232.071C225.444 78 220.071 72.6274 220.071 66V33C220.071 26.3726 225.444 21 232.071 21L267.357 21Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter14_d_137_230)'>
						<path
							className={'seatMap'}
							d='M239.072 31C240.176 31 241.072 31.8954 241.072 33V41C241.072 42.1046 240.176 43 239.072 43H231.072C229.967 43 229.072 42.1046 229.072 41V33C229.072 31.8954 229.967 31 231.072 31H239.072Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter15_d_137_230)'>
						<path
							className={'seatMap'}
							d='M239.072 56C240.176 56 241.072 56.8954 241.072 58V66C241.072 67.1046 240.176 68 239.072 68H231.072C229.967 68 229.072 67.1046 229.072 66V58C229.072 56.8954 229.967 56 231.072 56H239.072Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter16_d_137_230)'>
						<path
							className={'seatMap'}
							d='M268.072 56C269.176 56 270.072 56.8954 270.072 58V66C270.072 67.1046 269.176 68 268.072 68H260.072C258.967 68 258.072 67.1046 258.072 66V58C258.072 56.8954 258.967 56 260.072 56H268.072Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter17_d_137_230)'>
						<path
							className={'seatMap'}
							d='M268.072 31C269.176 31 270.072 31.8954 270.072 33V41C270.072 42.1046 269.176 43 268.072 43H260.072C258.967 43 258.072 42.1046 258.072 41V33C258.072 31.8954 258.967 31 260.072 31H268.072Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter18_d_137_230)'>
						<path
							d='M361.643 21C368.27 21 373.643 26.3726 373.643 33V66C373.643 72.6274 368.27 78 361.643 78H326.357C319.729 78 314.357 72.6274 314.357 66V33C314.357 26.3726 319.729 21 326.357 21L361.643 21Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter19_d_137_230)'>
						<path
							className={'seatMap'}
							d='M333.357 31C334.462 31 335.357 31.8954 335.357 33V41C335.357 42.1046 334.462 43 333.357 43H325.357C324.252 43 323.357 42.1046 323.357 41V33C323.357 31.8954 324.252 31 325.357 31H333.357Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter20_d_137_230)'>
						<path
							className={'seatMap'}
							d='M333.357 56C334.462 56 335.357 56.8954 335.357 58V66C335.357 67.1046 334.462 68 333.357 68H325.357C324.252 68 323.357 67.1046 323.357 66V58C323.357 56.8954 324.252 56 325.357 56H333.357Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter21_d_137_230)'>
						<path
							className={'seatMap'}
							d='M362.357 56C363.462 56 364.357 56.8954 364.357 58V66C364.357 67.1046 363.462 68 362.357 68H354.357C353.252 68 352.357 67.1046 352.357 66V58C352.357 56.8954 353.252 56 354.357 56H362.357Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter22_d_137_230)'>
						<path
							className={'seatMap'}
							d='M362.357 31C363.462 31 364.357 31.8954 364.357 33V41C364.357 42.1046 363.462 43 362.357 43H354.357C353.252 43 352.357 42.1046 352.357 41V33C352.357 31.8954 353.252 31 354.357 31H362.357Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter23_d_137_230)'>
						<path
							d='M455.928 21C462.556 21 467.928 26.3726 467.928 33V66C467.928 72.6274 462.556 78 455.928 78H420.643C414.015 78 408.643 72.6274 408.643 66V33C408.643 26.3726 414.015 21 420.643 21L455.928 21Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter24_d_137_230)'>
						<path
							className={'seatMap'}
							d='M427.643 31C428.747 31 429.643 31.8954 429.643 33V41C429.643 42.1046 428.747 43 427.643 43H419.643C418.538 43 417.643 42.1046 417.643 41V33C417.643 31.8954 418.538 31 419.643 31H427.643Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter25_d_137_230)'>
						<path
							className={'seatMap'}
							d='M427.643 56C428.747 56 429.643 56.8954 429.643 58V66C429.643 67.1046 428.747 68 427.643 68H419.643C418.538 68 417.643 67.1046 417.643 66V58C417.643 56.8954 418.538 56 419.643 56H427.643Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter26_d_137_230)'>
						<path
							className={'seatMap'}
							d='M456.643 56C457.747 56 458.643 56.8954 458.643 58V66C458.643 67.1046 457.747 68 456.643 68H448.643C447.538 68 446.643 67.1046 446.643 66V58C446.643 56.8954 447.538 56 448.643 56H456.643Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter27_d_137_230)'>
						<path
							className={'seatMap'}
							d='M456.643 31C457.747 31 458.643 31.8954 458.643 33V41C458.643 42.1046 457.747 43 456.643 43H448.643C447.538 43 446.643 42.1046 446.643 41V33C446.643 31.8954 447.538 31 448.643 31H456.643Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter28_d_137_230)'>
						<path
							className={'seatMap'}
							d='M910 209C911.105 209 912 209.895 912 211V219C912 220.105 911.105 221 910 221H902C900.895 221 900 220.105 900 219V211C900 209.895 900.895 209 902 209H910Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter29_d_137_230)'>
						<path
							className={'seatMap'}
							d='M945 209C946.105 209 947 209.895 947 211V219C947 220.105 946.105 221 945 221H937C935.895 221 935 220.105 935 219V211C935 209.895 935.895 209 937 209H945Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter30_d_137_230)'>
						<path
							className={'seatMap'}
							d='M910 246C911.105 246 912 246.895 912 248V256C912 257.105 911.105 258 910 258H902C900.895 258 900 257.105 900 256V248C900 246.895 900.895 246 902 246H910Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter31_d_137_230)'>
						<path
							className={'seatMap'}
							d='M945 246C946.105 246 947 246.895 947 248V256C947 257.105 946.105 258 945 258H937C935.895 258 935 257.105 935 256V248C935 246.895 935.895 246 937 246H945Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter32_d_137_230)'>
						<path
							className={'seatMap'}
							d='M910 283C911.105 283 912 283.895 912 285V293C912 294.105 911.105 295 910 295H902C900.895 295 900 294.105 900 293V285C900 283.895 900.895 283 902 283H910Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter33_d_137_230)'>
						<path
							className={'seatMap'}
							d='M945 283C946.105 283 947 283.895 947 285V293C947 294.105 946.105 295 945 295H937C935.895 295 935 294.105 935 293V285C935 283.895 935.895 283 937 283H945Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter34_d_137_230)'>
						<path
							className={'seatMap'}
							d='M910 320C911.105 320 912 320.895 912 322V330C912 331.105 911.105 332 910 332H902C900.895 332 900 331.105 900 330V322C900 320.895 900.895 320 902 320H910Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter35_d_137_230)'>
						<path
							className={'seatMap'}
							d='M945 320C946.105 320 947 320.895 947 322V330C947 331.105 946.105 332 945 332H937C935.895 332 935 331.105 935 330V322C935 320.895 935.895 320 937 320H945Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter36_d_137_230)'>
						<path
							className={'seatMap'}
							d='M910 357C911.105 357 912 357.895 912 359V367C912 368.105 911.105 369 910 369H902C900.895 369 900 368.105 900 367V359C900 357.895 900.895 357 902 357H910Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter37_d_137_230)'>
						<path
							className={'seatMap'}
							d='M945 357C946.105 357 947 357.895 947 359V367C947 368.105 946.105 369 945 369H937C935.895 369 935 368.105 935 367V359C935 357.895 935.895 357 937 357H945Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter38_d_137_230)'>
						<path
							className={'boxMap'}
							d='M827 162C828.105 162 829 162.895 829 164V220C829 221.105 828.105 222 827 222H804C802.895 222 802 221.105 802 220V164C802 162.895 802.895 162 804 162H827Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter39_d_137_230)'>
						<path
							className={'roomMap'}
							d='M791 162C792.105 162 793 162.895 793 164V287C793 288.105 792.105 289 791 289H740C738.895 289 738 288.105 738 287V164C738 162.895 738.895 162 740 162H791Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter40_d_137_230)'>
						<path
							className={'roomMap'}
							d='M791 294C792.105 294 793 294.895 793 296V400C793 401.105 792.105 402 791 402H740C738.895 402 738 401.105 738 400V296C738 294.895 738.895 294 740 294H791Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter41_d_137_230)'>
						<path
							className={'boxMap'}
							d='M827 228C828.105 228 829 228.895 829 230V286C829 287.105 828.105 288 827 288H804C802.895 288 802 287.105 802 286V230C802 228.895 802.895 228 804 228H827Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter42_d_137_230)'>
						<path
							className={'roomMap'}
							d='M827 294C828.105 294 829 294.895 829 296V400C829 401.105 828.105 402 827 402H804C802.895 402 802 401.105 802 400V296C802 294.895 802.895 294 804 294H827Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter43_d_137_230)'>
						<path
							className={'seatMap'}
							d='M1005 227.5C1006.1 227.5 1007 228.395 1007 229.5V237.5C1007 238.605 1006.1 239.5 1005 239.5H997C995.895 239.5 995 238.605 995 237.5V229.5C995 228.395 995.895 227.5 997 227.5H1005Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter44_d_137_230)'>
						<path
							className={'seatMap'}
							d='M1040 227.5C1041.1 227.5 1042 228.395 1042 229.5V237.5C1042 238.605 1041.1 239.5 1040 239.5H1032C1030.9 239.5 1030 238.605 1030 237.5V229.5C1030 228.395 1030.9 227.5 1032 227.5H1040Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter45_d_137_230)'>
						<path
							className={'seatMap'}
							d='M1005 264.5C1006.1 264.5 1007 265.395 1007 266.5V274.5C1007 275.605 1006.1 276.5 1005 276.5H997C995.895 276.5 995 275.605 995 274.5V266.5C995 265.395 995.895 264.5 997 264.5H1005Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter46_d_137_230)'>
						<path
							className={'seatMap'}
							d='M1040 264.5C1041.1 264.5 1042 265.395 1042 266.5V274.5C1042 275.605 1041.1 276.5 1040 276.5H1032C1030.9 276.5 1030 275.605 1030 274.5V266.5C1030 265.395 1030.9 264.5 1032 264.5H1040Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter47_d_137_230)'>
						<path
							className={'seatMap'}
							d='M1005 301.5C1006.1 301.5 1007 302.395 1007 303.5V311.5C1007 312.605 1006.1 313.5 1005 313.5H997C995.895 313.5 995 312.605 995 311.5V303.5C995 302.395 995.895 301.5 997 301.5H1005Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter48_d_137_230)'>
						<path
							className={'seatMap'}
							d='M1040 301.5C1041.1 301.5 1042 302.395 1042 303.5V311.5C1042 312.605 1041.1 313.5 1040 313.5H1032C1030.9 313.5 1030 312.605 1030 311.5V303.5C1030 302.395 1030.9 301.5 1032 301.5H1040Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter49_d_137_230)'>
						<path
							className={'seatMap'}
							d='M1005 338.5C1006.1 338.5 1007 339.395 1007 340.5V348.5C1007 349.605 1006.1 350.5 1005 350.5H997C995.895 350.5 995 349.605 995 348.5V340.5C995 339.395 995.895 338.5 997 338.5H1005Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter50_d_137_230)'>
						<path
							className={'seatMap'}
							d='M1040 338.5C1041.1 338.5 1042 339.395 1042 340.5V348.5C1042 349.605 1041.1 350.5 1040 350.5H1032C1030.9 350.5 1030 349.605 1030 348.5V340.5C1030 339.395 1030.9 338.5 1032 338.5H1040Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter51_d_137_230)'>
						<path
							d='M753.428 21C760.056 21 765.428 26.3726 765.428 33V66C765.428 72.6274 760.056 78 753.428 78H718.143C711.515 78 706.143 72.6274 706.143 66V33C706.143 26.3726 711.515 21 718.143 21L753.428 21Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter52_d_137_230)'>
						<path
							className={'seatMap'}
							d='M725.143 31C726.247 31 727.143 31.8954 727.143 33V41C727.143 42.1046 726.247 43 725.143 43H717.143C716.038 43 715.143 42.1046 715.143 41V33C715.143 31.8954 716.038 31 717.143 31H725.143Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter53_d_137_230)'>
						<path
							className={'seatMap'}
							d='M725.143 56C726.247 56 727.143 56.8954 727.143 58V66C727.143 67.1046 726.247 68 725.143 68H717.143C716.038 68 715.143 67.1046 715.143 66V58C715.143 56.8954 716.038 56 717.143 56H725.143Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter54_d_137_230)'>
						<path
							className={'seatMap'}
							d='M754.143 56C755.247 56 756.143 56.8954 756.143 58V66C756.143 67.1046 755.247 68 754.143 68H746.143C745.038 68 744.143 67.1046 744.143 66V58C744.143 56.8954 745.038 56 746.143 56H754.143Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter55_d_137_230)'>
						<path
							className={'seatMap'}
							d='M754.143 31C755.247 31 756.143 31.8954 756.143 33V41C756.143 42.1046 755.247 43 754.143 43H746.143C745.038 43 744.143 42.1046 744.143 41V33C744.143 31.8954 745.038 31 746.143 31H754.143Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter56_d_137_230)'>
						<path
							d='M847.714 21C854.342 21 859.714 26.3726 859.714 33V66C859.714 72.6274 854.342 78 847.714 78H812.428C805.801 78 800.428 72.6274 800.428 66V33C800.428 26.3726 805.801 21 812.428 21L847.714 21Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter57_d_137_230)'>
						<path
							className={'seatMap'}
							d='M819.428 31C820.533 31 821.428 31.8954 821.428 33V41C821.428 42.1046 820.533 43 819.428 43H811.428C810.324 43 809.428 42.1046 809.428 41V33C809.428 31.8954 810.324 31 811.428 31H819.428Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter58_d_137_230)'>
						<path
							className={'seatMap'}
							d='M819.428 56C820.533 56 821.428 56.8954 821.428 58V66C821.428 67.1046 820.533 68 819.428 68H811.428C810.324 68 809.428 67.1046 809.428 66V58C809.428 56.8954 810.324 56 811.428 56H819.428Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter59_d_137_230)'>
						<path
							className={'seatMap'}
							d='M848.428 56C849.533 56 850.428 56.8954 850.428 58V66C850.428 67.1046 849.533 68 848.428 68H840.428C839.324 68 838.428 67.1046 838.428 66V58C838.428 56.8954 839.324 56 840.428 56H848.428Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter60_d_137_230)'>
						<path
							className={'seatMap'}
							d='M848.428 31C849.533 31 850.428 31.8954 850.428 33V41C850.428 42.1046 849.533 43 848.428 43H840.428C839.324 43 838.428 42.1046 838.428 41V33C838.428 31.8954 839.324 31 840.428 31H848.428Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter61_d_137_230)'>
						<path
							d='M942 21C948.627 21 954 26.3726 954 33V66C954 72.6274 948.627 78 942 78H906.714C900.087 78 894.714 72.6274 894.714 66V33C894.714 26.3726 900.087 21 906.714 21L942 21Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter62_d_137_230)'>
						<path
							className={'seatMap'}
							d='M913.714 31C914.819 31 915.714 31.8954 915.714 33V41C915.714 42.1046 914.819 43 913.714 43H905.714C904.61 43 903.714 42.1046 903.714 41V33C903.714 31.8954 904.61 31 905.714 31H913.714Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter63_d_137_230)'>
						<path
							className={'seatMap'}
							d='M913.714 56C914.819 56 915.714 56.8954 915.714 58V66C915.714 67.1046 914.819 68 913.714 68H905.714C904.61 68 903.714 67.1046 903.714 66V58C903.714 56.8954 904.61 56 905.714 56H913.714Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter64_d_137_230)'>
						<path
							className={'seatMap'}
							d='M942.714 56C943.819 56 944.714 56.8954 944.714 58V66C944.714 67.1046 943.819 68 942.714 68H934.714C933.61 68 932.714 67.1046 932.714 66V58C932.714 56.8954 933.61 56 934.714 56H942.714Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter65_d_137_230)'>
						<path
							className={'seatMap'}
							d='M942.714 31C943.819 31 944.714 31.8954 944.714 33V41C944.714 42.1046 943.819 43 942.714 43H934.714C933.61 43 932.714 42.1046 932.714 41V33C932.714 31.8954 933.61 31 934.714 31H942.714Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter66_d_137_230)'>
						<path
							d='M1036.29 21C1042.91 21 1048.29 26.3726 1048.29 33V66C1048.29 72.6274 1042.91 78 1036.29 78H1001C994.373 78 989 72.6274 989 66V33C989 26.3726 994.373 21 1001 21L1036.29 21Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter67_d_137_230)'>
						<path
							className={'seatMap'}
							d='M1008 31C1009.1 31 1010 31.8954 1010 33V41C1010 42.1046 1009.1 43 1008 43H1000C998.895 43 998 42.1046 998 41V33C998 31.8954 998.895 31 1000 31H1008Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter68_d_137_230)'>
						<path
							className={'seatMap'}
							d='M1008 56C1009.1 56 1010 56.8954 1010 58V66C1010 67.1046 1009.1 68 1008 68H1000C998.895 68 998 67.1046 998 66V58C998 56.8954 998.895 56 1000 56H1008Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter69_d_137_230)'>
						<path
							className={'seatMap'}
							d='M1037 56C1038.1 56 1039 56.8954 1039 58V66C1039 67.1046 1038.1 68 1037 68H1029C1027.9 68 1027 67.1046 1027 66V58C1027 56.8954 1027.9 56 1029 56H1037Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter70_d_137_230)'>
						<path
							className={'seatMap'}
							d='M1037 31C1038.1 31 1039 31.8954 1039 33V41C1039 42.1046 1038.1 43 1037 43H1029C1027.9 43 1027 42.1046 1027 41V33C1027 31.8954 1027.9 31 1029 31H1037Z'
							fill='#00B5AC'
						/>
					</g>
					<path d='M431.034 402L430 156' stroke='white' stroke-width='80' />
					<path d='M68.0337 402L67.0001 156' stroke='white' stroke-width='30' />
					<g filter='url(#filter71_d_137_230)'>
						<path
							className={'boxMap'}
							d='M79 157C80.1046 157 81 157.895 81 159V215C81 216.105 80.1046 217 79 217H56C54.8954 217 54 216.105 54 215V159C54 157.895 54.8954 157 56 157H79Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter72_d_137_230)'>
						<path
							className={'boxMap'}
							d='M79 223C80.1046 223 81 223.895 81 225V281C81 282.105 80.1046 283 79 283H56C54.8954 283 54 282.105 54 281V225C54 223.895 54.8954 223 56 223H79Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter73_d_137_230)'>
						<path
							d='M79 289C80.1046 289 81 289.895 81 291V395C81 396.105 80.1046 397 79 397H56C54.8954 397 54 396.105 54 395L54 291C54 289.895 54.8954 289 56 289H79Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter74_d_137_230)'>
						<path
							d='M298 166C304.627 166 310 171.373 310 178V390C310 396.627 304.627 402 298 402H263C256.373 402 251 396.627 251 390V178C251 171.373 256.373 166 263 166H298Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter75_d_137_230)'>
						<path
							d='M173 166C179.627 166 185 171.373 185 178V390C185 396.627 179.627 402 173 402H138C131.373 402 126 396.627 126 390L126 178C126 171.373 131.373 166 138 166H173Z'
							fill='white'
						/>
					</g>
					<g filter='url(#filter76_d_137_230)'>
						<path
							className={'seatMap'}
							d='M142 204C143.105 204 144 204.895 144 206V214C144 215.105 143.105 216 142 216H134C132.895 216 132 215.105 132 214V206C132 204.895 132.895 204 134 204H142Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter77_d_137_230)'>
						<path
							className={'seatMap'}
							d='M177 204C178.105 204 179 204.895 179 206V214C179 215.105 178.105 216 177 216H169C167.895 216 167 215.105 167 214V206C167 204.895 167.895 204 169 204H177Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter78_d_137_230)'>
						<path
							className={'seatMap'}
							d='M142 241C143.105 241 144 241.895 144 243V251C144 252.105 143.105 253 142 253H134C132.895 253 132 252.105 132 251V243C132 241.895 132.895 241 134 241H142Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter79_d_137_230)'>
						<path
							className={'seatMap'}
							d='M177 241C178.105 241 179 241.895 179 243V251C179 252.105 178.105 253 177 253H169C167.895 253 167 252.105 167 251V243C167 241.895 167.895 241 169 241H177Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter80_d_137_230)'>
						<path
							className={'seatMap'}
							d='M142 278C143.105 278 144 278.895 144 280V288C144 289.105 143.105 290 142 290H134C132.895 290 132 289.105 132 288V280C132 278.895 132.895 278 134 278H142Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter81_d_137_230)'>
						<path
							className={'seatMap'}
							d='M177 278C178.105 278 179 278.895 179 280V288C179 289.105 178.105 290 177 290H169C167.895 290 167 289.105 167 288V280C167 278.895 167.895 278 169 278H177Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter82_d_137_230)'>
						<path
							className={'seatMap'}
							d='M142 315C143.105 315 144 315.895 144 317V325C144 326.105 143.105 327 142 327H134C132.895 327 132 326.105 132 325V317C132 315.895 132.895 315 134 315H142Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter83_d_137_230)'>
						<path
							className={'seatMap'}
							d='M177 315C178.105 315 179 315.895 179 317V325C179 326.105 178.105 327 177 327H169C167.895 327 167 326.105 167 325V317C167 315.895 167.895 315 169 315H177Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter84_d_137_230)'>
						<path
							className={'seatMap'}
							d='M142 352C143.105 352 144 352.895 144 354V362C144 363.105 143.105 364 142 364H134C132.895 364 132 363.105 132 362V354C132 352.895 132.895 352 134 352H142Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter85_d_137_230)'>
						<path
							className={'seatMap'}
							d='M177 352C178.105 352 179 352.895 179 354V362C179 363.105 178.105 364 177 364H169C167.895 364 167 363.105 167 362V354C167 352.895 167.895 352 169 352H177Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter86_d_137_230)'>
						<path
							className={'seatMap'}
							d='M267 204C268.105 204 269 204.895 269 206V214C269 215.105 268.105 216 267 216H259C257.895 216 257 215.105 257 214V206C257 204.895 257.895 204 259 204H267Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter87_d_137_230)'>
						<path
							className={'seatMap'}
							d='M302 204C303.105 204 304 204.895 304 206V214C304 215.105 303.105 216 302 216H294C292.895 216 292 215.105 292 214V206C292 204.895 292.895 204 294 204H302Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter88_d_137_230)'>
						<path
							className={'seatMap'}
							d='M267 241C268.105 241 269 241.895 269 243V251C269 252.105 268.105 253 267 253H259C257.895 253 257 252.105 257 251V243C257 241.895 257.895 241 259 241H267Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter89_d_137_230)'>
						<path
							className={'seatMap'}
							d='M302 241C303.105 241 304 241.895 304 243V251C304 252.105 303.105 253 302 253H294C292.895 253 292 252.105 292 251V243C292 241.895 292.895 241 294 241H302Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter90_d_137_230)'>
						<path
							className={'seatMap'}
							d='M267 278C268.105 278 269 278.895 269 280V288C269 289.105 268.105 290 267 290H259C257.895 290 257 289.105 257 288V280C257 278.895 257.895 278 259 278H267Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter91_d_137_230)'>
						<path
							className={'seatMap'}
							d='M302 278C303.105 278 304 278.895 304 280V288C304 289.105 303.105 290 302 290H294C292.895 290 292 289.105 292 288V280C292 278.895 292.895 278 294 278H302Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter92_d_137_230)'>
						<path
							className={'seatMap'}
							d='M267 315C268.105 315 269 315.895 269 317V325C269 326.105 268.105 327 267 327H259C257.895 327 257 326.105 257 325V317C257 315.895 257.895 315 259 315H267Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter93_d_137_230)'>
						<path
							className={'seatMap'}
							d='M302 315C303.105 315 304 315.895 304 317V325C304 326.105 303.105 327 302 327H294C292.895 327 292 326.105 292 325V317C292 315.895 292.895 315 294 315H302Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter94_d_137_230)'>
						<path
							className={'seatMap'}
							d='M267 352C268.105 352 269 352.895 269 354V362C269 363.105 268.105 364 267 364H259C257.895 364 257 363.105 257 362V354C257 352.895 257.895 352 259 352H267Z'
							fill='#00B5AC'
						/>
					</g>
					<g filter='url(#filter95_d_137_230)'>
						<path
							className={'seatMap'}
							d='M302 352C303.105 352 304 352.895 304 354V362C304 363.105 303.105 364 302 364H294C292.895 364 292 363.105 292 362V354C292 352.895 292.895 352 294 352H302Z'
							fill='#00B5AC'
						/>
					</g>
					<line
						x1='96.0337'
						y1='402.008'
						x2='95.0001'
						y2='156.008'
						stroke='white'
						stroke-width='4'
					/>
				</g>
				<defs>
					<filter
						id='filter0_d_137_230'
						x='0'
						y='-6'
						width='1098'
						height='454'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset dx='10' dy='4' />
						<feGaussianBlur stdDeviation='5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter1_d_137_230'
						x='964'
						y='146'
						width='109'
						height='286'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter2_d_137_230'
						x='869'
						y='146'
						width='109'
						height='286'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter3_d_137_230'
						x='6.5'
						y='-4'
						width='109.286'
						height='107'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter4_d_137_230'
						x='15.5'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter5_d_137_230'
						x='15.5'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter6_d_137_230'
						x='44.5'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter7_d_137_230'
						x='44.5'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter8_d_137_230'
						x='100.786'
						y='-4'
						width='109.286'
						height='107'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter9_d_137_230'
						x='109.786'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter10_d_137_230'
						x='109.786'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter11_d_137_230'
						x='138.786'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter12_d_137_230'
						x='138.786'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter13_d_137_230'
						x='195.072'
						y='-4'
						width='109.286'
						height='107'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter14_d_137_230'
						x='204.072'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter15_d_137_230'
						x='204.072'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter16_d_137_230'
						x='233.072'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter17_d_137_230'
						x='233.072'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter18_d_137_230'
						x='289.357'
						y='-4'
						width='109.286'
						height='107'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter19_d_137_230'
						x='298.357'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter20_d_137_230'
						x='298.357'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter21_d_137_230'
						x='327.357'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter22_d_137_230'
						x='327.357'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter23_d_137_230'
						x='383.643'
						y='-4'
						width='109.286'
						height='107'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter24_d_137_230'
						x='392.643'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter25_d_137_230'
						x='392.643'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter26_d_137_230'
						x='421.643'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter27_d_137_230'
						x='421.643'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter28_d_137_230'
						x='875'
						y='184'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter29_d_137_230'
						x='910'
						y='184'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter30_d_137_230'
						x='875'
						y='221'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter31_d_137_230'
						x='910'
						y='221'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter32_d_137_230'
						x='875'
						y='258'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter33_d_137_230'
						x='910'
						y='258'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter34_d_137_230'
						x='875'
						y='295'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter35_d_137_230'
						x='910'
						y='295'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter36_d_137_230'
						x='875'
						y='332'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter37_d_137_230'
						x='910'
						y='332'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter38_d_137_230'
						x='777'
						y='137'
						width='77'
						height='110'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter39_d_137_230'
						x='713'
						y='137'
						width='105'
						height='177'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter40_d_137_230'
						x='713'
						y='269'
						width='105'
						height='158'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter41_d_137_230'
						x='777'
						y='203'
						width='77'
						height='110'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter42_d_137_230'
						x='777'
						y='269'
						width='77'
						height='158'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter43_d_137_230'
						x='970'
						y='202.5'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter44_d_137_230'
						x='1005'
						y='202.5'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter45_d_137_230'
						x='970'
						y='239.5'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter46_d_137_230'
						x='1005'
						y='239.5'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter47_d_137_230'
						x='970'
						y='276.5'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter48_d_137_230'
						x='1005'
						y='276.5'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter49_d_137_230'
						x='970'
						y='313.5'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter50_d_137_230'
						x='1005'
						y='313.5'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter51_d_137_230'
						x='681.143'
						y='-4'
						width='109.286'
						height='107'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter52_d_137_230'
						x='690.143'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter53_d_137_230'
						x='690.143'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter54_d_137_230'
						x='719.143'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter55_d_137_230'
						x='719.143'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter56_d_137_230'
						x='775.428'
						y='-4'
						width='109.286'
						height='107'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter57_d_137_230'
						x='784.428'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter58_d_137_230'
						x='784.428'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter59_d_137_230'
						x='813.428'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter60_d_137_230'
						x='813.428'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter61_d_137_230'
						x='869.714'
						y='-4'
						width='109.286'
						height='107'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter62_d_137_230'
						x='878.714'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter63_d_137_230'
						x='878.714'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter64_d_137_230'
						x='907.714'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter65_d_137_230'
						x='907.714'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter66_d_137_230'
						x='964'
						y='-4'
						width='109.286'
						height='107'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter67_d_137_230'
						x='973'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter68_d_137_230'
						x='973'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter69_d_137_230'
						x='1002'
						y='31'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter70_d_137_230'
						x='1002'
						y='6'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter71_d_137_230'
						x='29'
						y='132'
						width='77'
						height='110'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter72_d_137_230'
						x='29'
						y='198'
						width='77'
						height='110'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter73_d_137_230'
						x='29'
						y='264'
						width='77'
						height='158'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter74_d_137_230'
						x='226'
						y='141'
						width='109'
						height='286'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter75_d_137_230'
						x='101'
						y='141'
						width='109'
						height='286'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter76_d_137_230'
						x='107'
						y='179'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter77_d_137_230'
						x='142'
						y='179'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter78_d_137_230'
						x='107'
						y='216'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter79_d_137_230'
						x='142'
						y='216'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter80_d_137_230'
						x='107'
						y='253'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter81_d_137_230'
						x='142'
						y='253'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter82_d_137_230'
						x='107'
						y='290'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter83_d_137_230'
						x='142'
						y='290'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter84_d_137_230'
						x='107'
						y='327'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter85_d_137_230'
						x='142'
						y='327'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter86_d_137_230'
						x='232'
						y='179'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter87_d_137_230'
						x='267'
						y='179'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter88_d_137_230'
						x='232'
						y='216'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter89_d_137_230'
						x='267'
						y='216'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter90_d_137_230'
						x='232'
						y='253'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter91_d_137_230'
						x='267'
						y='253'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter92_d_137_230'
						x='232'
						y='290'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter93_d_137_230'
						x='267'
						y='290'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter94_d_137_230'
						x='232'
						y='327'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<filter
						id='filter95_d_137_230'
						x='267'
						y='327'
						width='62'
						height='62'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='12.5' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.141176 0 0 0 0 0.176471 0 0 0 0 0.305882 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_137_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_137_230'
							result='shape'
						/>
					</filter>
					<clipPath id='clip0_137_230'>
						<rect width='1078' height='434' rx='12' fill='white' />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
};

export default MapImgHome;
