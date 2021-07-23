import styled from 'styled-components';

export const PaymentForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 1rem;
	box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
	border-radius: 0.5rem;
	padding: 1rem;
	gap: 0.5rem;
`;

export const Error = styled.p`
	color: #5d0c28;
	margin-top: 0.3rem;
	font-size: 0.8rem;
`;
