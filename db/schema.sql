CREATE DATABASE IF NOT EXISTS cocktails_db;

use cocktails_db;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `cocktail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `instructions` text NOT NULL,
  `imageUrl` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ingredient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL DEFAULT 'Other',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `measure` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `cocktailingredient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` float DEFAULT '0',
  `CocktailId` int NOT NULL,
  `IngredientId` int NOT NULL,
  `MeasureId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `CocktailId` (`CocktailId`),
  KEY `IngredientId` (`IngredientId`),
  KEY `MeasureId` (`MeasureId`),
  CONSTRAINT `cocktailingredient_ibfk_1` FOREIGN KEY (`CocktailId`) REFERENCES `cocktail` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cocktailingredient_ibfk_2` FOREIGN KEY (`IngredientId`) REFERENCES `ingredient` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cocktailingredient_ibfk_3` FOREIGN KEY (`MeasureId`) REFERENCES `measure` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `favoriterecipe` (
  `CocktailId` int NOT NULL,
  `UserId` int NOT NULL,
  PRIMARY KEY (`CocktailId`,`UserId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `favoriterecipe_ibfk_1` FOREIGN KEY (`CocktailId`) REFERENCES `cocktail` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `favoriterecipe_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;