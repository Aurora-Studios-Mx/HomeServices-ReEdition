-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: homework
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ac0x`
--

DROP TABLE IF EXISTS `ac0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ac0x` (
  `uuid0x0` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ac0x`
--

LOCK TABLES `ac0x` WRITE;
/*!40000 ALTER TABLE `ac0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `ac0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `as0x`
--

DROP TABLE IF EXISTS `as0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `as0x` (
  `payloader0x0` varchar(255) NOT NULL,
  `idshop0x1` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `as0x`
--

LOCK TABLES `as0x` WRITE;
/*!40000 ALTER TABLE `as0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `as0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `c0x`
--

DROP TABLE IF EXISTS `c0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `c0x` (
  `owner0x0` varchar(255) NOT NULL,
  `payloader0x1` varchar(255) NOT NULL,
  `content0x2` blob NOT NULL,
  `date0x3` datetime NOT NULL,
  `customid0x4` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `c0x`
--

LOCK TABLES `c0x` WRITE;
/*!40000 ALTER TABLE `c0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `c0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ctg0x`
--

DROP TABLE IF EXISTS `ctg0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ctg0x` (
  `name0x0` varchar(255) NOT NULL,
  `codename0x1` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ctg0x`
--

LOCK TABLES `ctg0x` WRITE;
/*!40000 ALTER TABLE `ctg0x` DISABLE KEYS */;
INSERT INTO `ctg0x` VALUES ('Fontanería','FTN'),('Construcción','CTN'),('Reparación de electrónicos','RDE'),('Limpieza','CLN'),('Cuidado de niños','CDN'),('Cuidado de mascotas','CDM'),('Cocina','CCN'),('Jardinería','JDN'),('Belleza','BLZ'),('Gimnasio','GMO'),('Contabilidad','CTB'),('Marketing','MKN'),('Turismo','TRM');
/*!40000 ALTER TABLE `ctg0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `n0x`
--

DROP TABLE IF EXISTS `n0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `n0x` (
  `own0x0` varchar(255) NOT NULL,
  `id0x1` varchar(12) NOT NULL,
  `title0x2` varchar(255) NOT NULL,
  `subtitle0x3` blob NOT NULL,
  `severity0x4` int NOT NULL,
  `dir0x5` blob NOT NULL,
  `date0x6` datetime DEFAULT NULL,
  `read0x7` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `n0x`
--

LOCK TABLES `n0x` WRITE;
/*!40000 ALTER TABLE `n0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `n0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `op0x`
--

DROP TABLE IF EXISTS `op0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `op0x` (
  `owner0x0` varchar(255) NOT NULL,
  `product0x1` varchar(255) NOT NULL,
  `data0x2` int NOT NULL,
  `data0x3` int NOT NULL,
  `data0x4` int NOT NULL,
  `data0x5` int NOT NULL,
  `data0x6` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `op0x`
--

LOCK TABLES `op0x` WRITE;
/*!40000 ALTER TABLE `op0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `op0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pay0x`
--

DROP TABLE IF EXISTS `pay0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pay0x` (
  `transID0x0` blob NOT NULL,
  `payer0x1` varchar(255) NOT NULL,
  `status0x2` varchar(20) NOT NULL,
  `powered0x3` varchar(10) NOT NULL,
  `uuidshop0x4` varchar(255) NOT NULL,
  `price0x5` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pay0x`
--

LOCK TABLES `pay0x` WRITE;
/*!40000 ALTER TABLE `pay0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `pay0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `q0x`
--

DROP TABLE IF EXISTS `q0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `q0x` (
  `article0x0` varchar(255) NOT NULL,
  `owner0x1` varchar(255) NOT NULL,
  `shopper0x2` varchar(255) NOT NULL,
  `subprice0x3` float NOT NULL,
  `id_shop0x4` varchar(45) NOT NULL,
  `formA0x5` varchar(255) NOT NULL,
  `formB0x6` varchar(8) NOT NULL,
  `formC0x7` varchar(255) NOT NULL,
  `formD0x8` varchar(8) NOT NULL,
  `formE0x9` varchar(45) NOT NULL,
  `formF0x10` blob NOT NULL,
  `date0x11` datetime NOT NULL,
  `completed0x12` int NOT NULL,
  `multiplebuys0x13` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `q0x`
--

LOCK TABLES `q0x` WRITE;
/*!40000 ALTER TABLE `q0x` DISABLE KEYS */;
INSERT INTO `q0x` VALUES ('26ae32fd-4c7d-43b5-a92f-7fe37551caa6','9d1b8d75-3410-47f1-88dd-386aa35c3c17','24f8ad01-ff7b-41c2-b425-f1b5bba26e1b',892.4,'HS-051901662595','Lmud Xqaz Emzotql','75790','Omxxq 9 Egd','1513','(229) 609-4828',_binary 'mep','2023-12-01 09:04:40',5,6);
/*!40000 ALTER TABLE `q0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `s0x`
--

DROP TABLE IF EXISTS `s0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `s0x` (
  `uuid0x0` varchar(255) NOT NULL,
  `owner0x1` varchar(255) NOT NULL,
  `category0x2` varchar(8) NOT NULL,
  `name0x3` varchar(25) NOT NULL,
  `description0x4` blob NOT NULL,
  `price0x5` int NOT NULL,
  `ttp0x6` varchar(45) NOT NULL,
  `date0x7` datetime NOT NULL,
  `status0x8` int NOT NULL,
  `priceB0x9` int NOT NULL,
  `explicit0x10` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `s0x`
--

LOCK TABLES `s0x` WRITE;
/*!40000 ALTER TABLE `s0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `s0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `s_p0x`
--

DROP TABLE IF EXISTS `s_p0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `s_p0x` (
  `uuid0x0` varchar(255) NOT NULL,
  `blob0x1` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `s_p0x`
--

LOCK TABLES `s_p0x` WRITE;
/*!40000 ALTER TABLE `s_p0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `s_p0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status0x`
--

DROP TABLE IF EXISTS `status0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status0x` (
  `main0x` int NOT NULL,
  `title0x` varchar(255) DEFAULT NULL,
  `reason0x` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status0x`
--

LOCK TABLES `status0x` WRITE;
/*!40000 ALTER TABLE `status0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `status0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tfa0x`
--

DROP TABLE IF EXISTS `tfa0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tfa0x` (
  `owner0x0` varchar(255) NOT NULL,
  `secret0x1` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tfa0x`
--

LOCK TABLES `tfa0x` WRITE;
/*!40000 ALTER TABLE `tfa0x` DISABLE KEYS */;
INSERT INTO `tfa0x` VALUES ('c6ba89c0-9e29-4bdc-8283-655f078a0541',_binary 'OI6FMRS2G5SDU22J');
/*!40000 ALTER TABLE `tfa0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tm0x`
--

DROP TABLE IF EXISTS `tm0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tm0x` (
  `id0x0` int NOT NULL,
  `remited0x1` varchar(255) NOT NULL,
  `sender0x2` varchar(255) NOT NULL,
  `theme0x3` varchar(45) NOT NULL,
  `lastmessage0x4` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tm0x`
--

LOCK TABLES `tm0x` WRITE;
/*!40000 ALTER TABLE `tm0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `tm0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ud0x`
--

DROP TABLE IF EXISTS `ud0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ud0x` (
  `uuid0x0` varchar(255) NOT NULL,
  `power0x1` varchar(12) NOT NULL,
  `email0x2` blob NOT NULL,
  `pass0x3` blob NOT NULL,
  `fullname0x4` blob NOT NULL,
  `verify0x5` int DEFAULT NULL,
  `pp0x6` blob NOT NULL,
  `type0x7` varchar(1) DEFAULT NULL,
  `date0x8` datetime NOT NULL,
  `new0x9` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ud0x`
--

LOCK TABLES `ud0x` WRITE;
/*!40000 ALTER TABLE `ud0x` DISABLE KEYS */;
INSERT INTO `ud0x` VALUES ('c6ba89c0-9e29-4bdc-8283-655f078a0541','AURORA',_binary '$2b$12$YTTkBbeqe2LHX8SVTgMNae3gw6dfQjvOQvTSKA.cyVoagCDYGcula',_binary '$2b$12$bp9M9rBe6SSIsZzcZFsIoelgIS6OvkYh7JXEBJsGGF99XpvHIO45e',_binary 'fqef',1,_binary 'notassign','1','2024-01-16 16:12:11',0),('bd044039-f26a-4aa6-a221-2aaee683aced','GOOGLE',_binary '$2b$12$RETnxg7dAA975tJGuLpV4eAhmI0DP2URdt.OfPDWQC2yra7.iib8S',_binary '$2b$12$Dx6guWX6UL2OQ7IcsrJJ4e3Oz0hLATzAwebahY.5gDwmzZGNCXcsy',_binary 'Eak Zadu',0,_binary 'https://lh3.googleusercontent.com/a/ACg8ocKPfa3vUAoeuzglZNUN0M2VAESmJUV48J7s1jNa8oCD-F0=s96-c',NULL,'2024-02-04 19:32:09',1);
/*!40000 ALTER TABLE `ud0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ud_p0x`
--

DROP TABLE IF EXISTS `ud_p0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ud_p0x` (
  `state0x0` varchar(45) NOT NULL,
  `city0x1` varchar(45) NOT NULL,
  `owner0x2` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ud_p0x`
--

LOCK TABLES `ud_p0x` WRITE;
/*!40000 ALTER TABLE `ud_p0x` DISABLE KEYS */;
INSERT INTO `ud_p0x` VALUES ('Hqdmodgl','Fuqddm Nxmzom','c6ba89c0-9e29-4bdc-8283-655f078a0541');
/*!40000 ALTER TABLE `ud_p0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `v0x`
--

DROP TABLE IF EXISTS `v0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v0x` (
  `code0x0` varchar(6) NOT NULL,
  `email0x1` blob NOT NULL,
  `date0x2` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `v0x`
--

LOCK TABLES `v0x` WRITE;
/*!40000 ALTER TABLE `v0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `v0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws0x`
--

DROP TABLE IF EXISTS `ws0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ws0x` (
  `name0x0` varchar(255) NOT NULL,
  `age0x1` int NOT NULL,
  `genre0x2` int NOT NULL,
  `date0x3` varchar(45) NOT NULL,
  `crp0x4` varchar(18) NOT NULL,
  `rc0x5` varchar(30) NOT NULL,
  `blob0x6` varchar(12) NOT NULL,
  `hsA0x7` blob NOT NULL,
  `hsB0x8` varchar(45) NOT NULL,
  `hsC0x9` varchar(45) NOT NULL,
  `status` int NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `id` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws0x`
--

LOCK TABLES `ws0x` WRITE;
/*!40000 ALTER TABLE `ws0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `ws0x` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_p0x`
--

DROP TABLE IF EXISTS `ws_p0x`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ws_p0x` (
  `idBlob0x0` varchar(12) NOT NULL,
  `a0x1` longblob NOT NULL,
  `b0x2` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_p0x`
--

LOCK TABLES `ws_p0x` WRITE;
/*!40000 ALTER TABLE `ws_p0x` DISABLE KEYS */;
/*!40000 ALTER TABLE `ws_p0x` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-07 22:48:47
