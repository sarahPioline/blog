-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 21, 2021 at 12:14 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `AUTHORS`
--

CREATE TABLE `AUTHORS` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `COMMENT`
--

CREATE TABLE `COMMENT` (
  `id` int(11) NOT NULL,
  `Author` int(11) NOT NULL,
  `Post` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Content` varchar(500) NOT NULL,
  `Point` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `POST`
--

CREATE TABLE `POST` (
  `Title` varchar(50) NOT NULL,
  `Subtitle` varchar(50) NOT NULL,
  `Id` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Images` varchar(50) NOT NULL,
  `Author` int(11) NOT NULL,
  `Tags` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Tags`
--

CREATE TABLE `Tags` (
  `Id` int(11) NOT NULL,
  `Name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AUTHORS`
--
ALTER TABLE `AUTHORS`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Id` (`Id`);

--
-- Indexes for table `COMMENT`
--
ALTER TABLE `COMMENT`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `Author` (`Author`),
  ADD KEY `Post` (`Post`);

--
-- Indexes for table `POST`
--
ALTER TABLE `POST`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Title` (`Title`),
  ADD KEY `Author` (`Author`),
  ADD KEY `Tags` (`Tags`);

--
-- Indexes for table `Tags`
--
ALTER TABLE `Tags`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Id` (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `AUTHORS`
--
ALTER TABLE `AUTHORS`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `COMMENT`
--
ALTER TABLE `COMMENT`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `POST`
--
ALTER TABLE `POST`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Tags`
--
ALTER TABLE `Tags`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `COMMENT`
--
ALTER TABLE `COMMENT`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`Author`) REFERENCES `AUTHORS` (`Id`),
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`Post`) REFERENCES `POST` (`Id`);

--
-- Constraints for table `POST`
--
ALTER TABLE `POST`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`Author`) REFERENCES `AUTHORS` (`Id`),
  ADD CONSTRAINT `post_ibfk_2` FOREIGN KEY (`Tags`) REFERENCES `Tags` (`Id`);
