-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: translation
-- ------------------------------------------------------
-- Server version	5.7.17

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
-- Table structure for table `trans_table`
--

DROP TABLE IF EXISTS `trans_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trans_table` (
  `s_no` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  `target` varchar(45) NOT NULL,
  `translatedText` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  `source` varchar(45) NOT NULL,
  PRIMARY KEY (`s_no`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trans_table`
--

LOCK TABLES `trans_table` WRITE;
/*!40000 ALTER TABLE `trans_table` DISABLE KEYS */;
INSERT INTO `trans_table` VALUES (1,'元気ですか？','en','how are you?','ja'),(2,'元気ですか？','kn','ನೀವು ಹೇಗಿದ್ದೀರಿ?','ja'),(3,'元気ですか？','hi','क्या हाल है?','ja'),(4,'Do you know me?','fr','Me connaissez-vous?','en'),(5,'元気ですか？','ta','நீங்கள் எப்படி இருக்கிறீர்கள்?','ja'),(6,'Do you know me?','kn','ನಾನು ನಿನಗೆ ಗೊತ್ತಾ?','en'),(7,'元気ですか？','te','మీరు ఎలా ఉన్నారు?','ja'),(8,'Do you know me?','hi','क्या आप मुझे जानते हैं?','en'),(9,'Do you know me?','ta','என்னைத் தெரியுமா?','en'),(10,'Do you know me?','te','నేను మీకు తెలుసా?','en'),(11,'હું વધુ સારી રીતે જાણું છું.','hi','मुझे ज़्यादा अच्छी तरह पता है।','gu'),(12,'હું વધુ સારી રીતે જાણું છું.','kn','ನನಗೆ ಚೆನ್ನಾಗಿ ಗೊತ್ತು.','gu'),(13,'હું વધુ સારી રીતે જાણું છું.','ta','எனக்கு நன்றாக தெரியும்.','gu'),(14,'હું વધુ સારી રીતે જાણું છું.','te','నాకు బాగా తెలుసు.','gu');
/*!40000 ALTER TABLE `trans_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-04 18:11:32
