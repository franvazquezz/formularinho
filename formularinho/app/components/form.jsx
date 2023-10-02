"use client";
import axios from "axios";
import {useEffect, useState} from "react";
const Form = () => {
	const telefonoRegex = /^\+[1-9]\d{1,14}$/;
	const textoRegex = /^[a-zA-Z ]+$/;
	const [errorsPhone, setErrorsPhone] = useState({});
	const [errorsName, setErrorsName] = useState({});
	const [errors, setErrors] = useState({});
	const [userData, setUserData] = useState({
		full_name: "",
		phone_number: "",
		start_date: "",
		preferred_language: "",
		how_found: "",
		newsletter_subscription: false,
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setUserData({...userData, [name]: value});
		setErrorsPhone(validationPhone({...userData, [name]: value}));
		setErrorsName(validationName({...userData, [name]: value}));
		setErrors(validation({...userData, [name]: value}));
	};

	useEffect(() => {
		setErrorsPhone(validationPhone(userData));
		setErrorsName(validationName(userData));
		setErrors(validation(userData));
	}, [userData]);

	const validationName = () => {
		let errorsName = {};
		!userData.full_name
			? (errorsName.noname = "Agregue un nombre")
			: !textoRegex.test(userData.full_name) && (errorsName.badname = "El nombre no es válido");
		return errorsName;
	};
	const validationPhone = () => {
		let errorsPhone = {};
		!userData.phone_number
			? (errorsPhone.nophone = "Agregue un teléfono")
			: !telefonoRegex.test(userData.phone_number) && (errorsPhone.badphone = "El teléfono no es válido");
		return errorsPhone;
	};

	const validation = () => {
		let errors = {};
		!userData.how_found && (errors.nofound = "Seleccione una opción");
		!userData.preferred_language && (errors.nolang = "Seleccione un idioma");
		return errors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:3001/forms", userData);
			setUserData({
				full_name: "",
				phone_number: "",
				start_date: "",
				preferred_language: "",
				how_found: "",
				newsletter_subscription: false,
			});
			alert("Form submitted");
		} catch (error) {
			alert(error, "Error");
		}
	};
	return (
		<section>
			<div className="flex flex-col gap-4 min-w-screen p-4">
				<h1 className="text-center font-light text-3xl">Formulario</h1>
				<form onSubmit={handleSubmit} className="flex flex-col gap-5">
					<label htmlFor="full_name" className="font-semibold text-lg">
						Nombre completo
					</label>
					<input
						type="text"
						name="full_name"
						required
						placeholder="Juan Perez"
						className="bg-teal-100 shadow-lg rounded-lg focus:shadow-teal-600 hover:shadow-teal-600"
						value={userData.full_name}
						onChange={handleChange}></input>
					<label htmlFor="phone_number" className="font-semibold text-lg">
						Número de teléfono
					</label>
					<input
						type="tel"
						name="phone_number"
						maxLength={14}
						required
						placeholder="+5491112345678"
						className="bg-teal-100 shadow-lg rounded-lg focus:shadow-teal-600 hover:shadow-teal-600"
						value={userData.phone_number}
						onChange={handleChange}></input>
					<label htmlFor="start_date" className="font-semibold text-lg">
						Fecha de inicio
					</label>
					<input
						type="date"
						name="start_date"
						className="bg-teal-100 shadow-lg rounded-lg focus:shadow-teal-600 hover:shadow-teal-600"
						value={userData.start_date}
						onChange={handleChange}></input>
					<label htmlFor="preferred_language" className="font-semibold text-lg">
						¿Cuál es tu idioma preferido?
					</label>
					<select
						name="preferred_language"
						value={userData.preferred_language}
						onChange={handleChange}
						required
						className="bg-teal-100 shadow-lg rounded-lg focus:shadow-teal-600 hover:shadow-teal-600">
						<option name="english" value="Inglés">
							Inglés
						</option>
						<option name="spanish" value="Español">
							Español
						</option>
						<option name="french" value="Francés">
							Francés
						</option>
						<option name="german" value="Alemán">
							Alemán
						</option>
						<option name="other" value="Otro">
							Otro
						</option>
					</select>
					<label htmlFor="how_found" className="font-semibold text-lg">
						¿Cómo nos encontraste?
					</label>
					<div>
						<label className="flex flex-row justify-between">
							Amigos
							<input type="radio" name="how_found" value="Amigos" onChange={handleChange} />
						</label>
						<label className="flex flex-row justify-between">
							Búsqueda en línea
							<input type="radio" name="how_found" value="Búsqueda en línea" onChange={handleChange} />
						</label>
						<label className="flex flex-row justify-between">
							Publicidad
							<input type="radio" name="how_found" value="Publicidad" onChange={handleChange} />
						</label>
						<label className="flex flex-row justify-between">
							Otro
							<input type="radio" name="how_found" value="Otro" onChange={handleChange} />
						</label>
					</div>
					<div className="flex flex-row">
						<label htmlFor="newsletter_subscription" className="font-semibold text-lg">
							¿Desea recibir nuestro boletín informativo?
							<input
								type="checkbox"
								name="newsletter_subscription"
								className="ml-1"
								value={!userData.newsletter_subscription}
								onChange={handleChange}></input>
						</label>
					</div>
					{!errorsName.noname &&
					!errorsPhone.nophone &&
					!errorsName.badname &&
					!errorsPhone.badphone &&
					!errors.nofound &&
					!errors.nolang ? (
						<button
							type="submit"
							className="bg-teal-100 shadow-lg rounded-lg focus:shadow-teal-600 hover:shadow-teal-600">
							Enviar
						</button>
					) : (
						<button
							type="submit"
							disabled
							className="bg-teal-100 shadow-lg rounded-lg opacity-25 focus:shadow-teal-600 hover:shadow-teal-600">
							Enviar
						</button>
					)}
				</form>
				<a href="/forms" className="text-center">Ver todas las respuestas</a>
			</div>
		</section>
	);
};

export default Form;
