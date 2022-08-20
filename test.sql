/*
 Navicat Premium Data Transfer

 Source Server         : mariadb
 Source Server Type    : MariaDB
 Source Server Version : 100605
 Source Host           : localhost:3307
 Source Schema         : test

 Target Server Type    : MariaDB
 Target Server Version : 100605
 File Encoding         : 65001

 Date: 20/08/2022 06:52:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for clientes
-- ----------------------------
DROP TABLE IF EXISTS `clientes`;
CREATE TABLE `clientes`  (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of clientes
-- ----------------------------

-- ----------------------------
-- Table structure for cola_cliente
-- ----------------------------
DROP TABLE IF EXISTS `cola_cliente`;
CREATE TABLE `cola_cliente`  (
  `id_cliente` int(20) NULL DEFAULT NULL,
  `id_cola` int(1) NULL DEFAULT NULL,
  `atendido` int(1) NULL DEFAULT 0,
  `fecha_hora` datetime(0) NULL DEFAULT NULL,
  `id` int(20) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of cola_cliente
-- ----------------------------

-- ----------------------------
-- Table structure for colas
-- ----------------------------
DROP TABLE IF EXISTS `colas`;
CREATE TABLE `colas`  (
  `id` int(10) NULL DEFAULT NULL,
  `duracion` int(1) NULL DEFAULT NULL
) ENGINE = MyISAM CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of colas
-- ----------------------------
INSERT INTO `colas` VALUES (1, 2);
INSERT INTO `colas` VALUES (2, 3);

SET FOREIGN_KEY_CHECKS = 1;
