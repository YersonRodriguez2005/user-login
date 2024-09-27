-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-09-2024 a las 22:49:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `user_registration_system`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password_hash` varchar(256) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password_hash`, `created_at`) VALUES
(1, 'prueba', 'prueba@gmail.com', 'scrypt:32768:8:1$YFlbECFgvaWvZovs$d33e3e50b0723740f6a380be0e7f6a7d70a41c9d9a497258acb79960eec5d4188b0e74ba9b14951c5e02cb58c127aa090bf7397f0826e487c762b1d6a78f24a8', '2024-09-27 09:46:09'),
(2, 'prueba1', 'prueba1@gmail.com', 'scrypt:32768:8:1$ZT6eNEekNMmvLd37$1f3f1b860ac8380031bf13d199901903dd74962c8be9abca4999665ad0808caf83b70a899a5ed76efbcfc90753127d8454c2b1520203079e14695316bf724b80', '2024-09-27 09:48:41'),
(3, 'prueba 3', 'prueba3@gmail.com', 'scrypt:32768:8:1$SijmqGCK9L6NFqjb$bde0b2e1190afc2136bb47b354c314d8fece2432b9184bccf0ac3c20c6cbdb14c09a9c1252d5d0589e796509b116145fbeee0016e4d740042c72a2106b39789a', '2024-09-27 09:59:16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
