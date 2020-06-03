-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 03, 2020 alle 19:40
-- Versione del server: 10.4.11-MariaDB
-- Versione PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `4b_giochi`
--
CREATE DATABASE IF NOT EXISTS `4b_giochi` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `4b_giochi`;

-- --------------------------------------------------------

--
-- Struttura della tabella `giochi`
--

CREATE TABLE `giochi` (
  `id` int(11) NOT NULL,
  `nome` text NOT NULL,
  `produttore` text NOT NULL,
  `piattaforma` text NOT NULL,
  `anno` int(11) NOT NULL,
  `utente` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `giochi`
--

INSERT INTO `giochi` (`id`, `nome`, `produttore`, `piattaforma`, `anno`, `utente`) VALUES
(1, 'Rainbow Six', 'Ubisoft', 'PC', 2015, 'Piccio'),
(2, 'Steep', 'Ubisoft', 'Playstation', 2016, 'Cremonesi'),
(3, 'Clash Royale', 'Supercell', 'Telefono', 2016, 'Padovano'),
(4, 'Clash of Clans ', 'Supercell', 'Telefono', 2012, 'Piccio'),
(6, 'Uncharted 4', 'Naughty Dog', 'Playstation', 2016, 'Cremonesi'),
(7, 'FIFA 20', 'Electronic Arts', 'PC', 2020, 'Lucciano'),
(8, 'Apex Legends', 'Electronic Arts', 'PC', 2019, 'Piccio'),
(9, 'Life Is Strange', 'Square Enix', 'Playstation', 2015, 'Padovano'),
(10, 'Kingdom Hearts 3', 'Sqaure Enix', 'Playstation', 2019, 'Piccio'),
(12, 'World War Z', 'Epic Games', 'PC', 2019, 'Lucciano'),
(13, 'League of Legends', 'Riot Games', 'PC', 2009, 'Piccio'),
(14, 'Valorant', 'Riot Games', 'PC', 2020, 'Cremonesi'),
(16, 'Crash team racing', 'Activision', 'Nintendo', 2019, 'Padovano'),
(17, 'Animal crossing', 'Hisashi Nogami', 'Nintendo', 2020, 'Lucciano'),
(18, 'Halo', 'Bungie Studios', 'XBOX', 2007, 'Piccio'),
(44, 'asd', 'asd', 'asd', 3, 'Piccio'),
(46, 'acad', 'asdasd', 'asdasd', 3, 'Lucchese'),
(47, 'asdasd', 'asd', 'asdasd', 1323, 'Lucchese');

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`id`, `username`, `password`) VALUES
(1, 'Piccio', 'cfad1d1aa0dd835788709c8f794d3e06'),
(2, 'Cremonesi', 'cab40eee87c81cdaf414045bd2081bf9'),
(3, 'Lucciano', '25f9e794323b453885f5181f1b624d0b'),
(4, 'Padovano', '5f4dcc3b5aa765d61d8327deb882cf99'),
(5, 'Lucchese', 'cab40eee87c81cdaf414045bd2081bf9');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `giochi`
--
ALTER TABLE `giochi`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `giochi`
--
ALTER TABLE `giochi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
