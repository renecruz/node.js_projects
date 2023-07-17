-- CreateTable
CREATE TABLE `calle` (
    `calle_id` INTEGER NOT NULL AUTO_INCREMENT,
    `calle` VARCHAR(75) NOT NULL,
    `colonia_id` INTEGER NOT NULL,

    UNIQUE INDEX `calle_id_UNIQUE`(`calle_id`),
    INDEX `fk_calle_colonia1_idx`(`colonia_id`),
    PRIMARY KEY (`calle_id`, `colonia_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colonia` (
    `colonia_id` INTEGER NOT NULL AUTO_INCREMENT,
    `colonia` VARCHAR(75) NOT NULL,
    `codigo_postal` VARCHAR(5) NOT NULL,
    `localidad_id` INTEGER NOT NULL,

    UNIQUE INDEX `colonia_id_UNIQUE`(`colonia_id`),
    INDEX `fk_colonia_localidad1_idx`(`localidad_id`),
    PRIMARY KEY (`colonia_id`, `localidad_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contratante` (
    `contratante_id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`contratante_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contrato` (
    `contrato_id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATE NULL,
    `tipo_tarifa` VARCHAR(25) NULL,
    `activo` TINYINT NULL,
    `toma_hidraulica_id` VARCHAR(15) NOT NULL,

    UNIQUE INDEX `contrato_id_UNIQUE`(`contrato_id`),
    INDEX `fk_contrato_toma_hidraulica1_idx`(`toma_hidraulica_id`),
    PRIMARY KEY (`contrato_id`, `toma_hidraulica_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contrato_usuario` (
    `contrato_id` INTEGER NOT NULL,
    `usuario_id` INTEGER NOT NULL,
    `es_adherido` TINYINT NULL,

    UNIQUE INDEX `contrato_id_UNIQUE`(`contrato_id`),
    UNIQUE INDEX `usuario_id_UNIQUE`(`usuario_id`),
    INDEX `fk_contrato_has_titular_contrato1_idx`(`contrato_id`),
    INDEX `fk_contrato_has_titular_titular1_idx`(`usuario_id`),
    PRIMARY KEY (`contrato_id`, `usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `direccion` (
    `direccion_id` INTEGER NOT NULL AUTO_INCREMENT,
    `direccion` VARCHAR(250) NULL,
    `num_exterior` VARCHAR(45) NOT NULL,
    `num_interior` VARCHAR(45) NULL,
    `referencias` VARCHAR(150) NULL,
    `calle_id` INTEGER NOT NULL,

    UNIQUE INDEX `direccion_id_UNIQUE`(`direccion_id`),
    INDEX `fk_direccion_calle1_idx`(`calle_id`),
    PRIMARY KEY (`direccion_id`, `calle_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estado` (
    `estado_id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` VARCHAR(75) NOT NULL,
    `abreviatura` VARCHAR(10) NOT NULL,
    `latitud` VARCHAR(20) NULL,
    `longitud` VARCHAR(20) NULL,

    UNIQUE INDEX `estado_id_UNIQUE`(`estado_id`),
    PRIMARY KEY (`estado_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lectura_medidor` (
    `lectura_id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATE NULL,
    `lectura_anterior` INTEGER NULL,
    `lectura_actual` INTEGER NULL,
    `pagada` TINYINT NULL,
    `medidor_id` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `lectura_id_UNIQUE`(`lectura_id`),
    INDEX `fk_lectura_medidor_medidor1`(`medidor_id`),
    PRIMARY KEY (`lectura_id`, `medidor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `localidad` (
    `localidad_id` INTEGER NOT NULL AUTO_INCREMENT,
    `localidad` VARCHAR(75) NOT NULL,
    `tipo` VARCHAR(30) NULL,
    `municipio_id` INTEGER NOT NULL,

    UNIQUE INDEX `localidad_id_UNIQUE`(`localidad_id`),
    INDEX `fk_localidad_municipio1_idx`(`municipio_id`),
    PRIMARY KEY (`localidad_id`, `municipio_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medidor` (
    `medidor_id` VARCHAR(45) NOT NULL,
    `tipo` VARCHAR(45) NULL,
    `marca` VARCHAR(45) NULL,
    `activo` TINYINT NULL,

    UNIQUE INDEX `medidor_id_UNIQUE`(`medidor_id`),
    PRIMARY KEY (`medidor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `municipio` (
    `municipio_id` INTEGER NOT NULL AUTO_INCREMENT,
    `municipio` VARCHAR(45) NOT NULL,
    `estado_id` INTEGER NOT NULL,

    UNIQUE INDEX `municipio_id_UNIQUE`(`municipio_id`),
    INDEX `fk_municipio_estado_idx`(`estado_id`),
    PRIMARY KEY (`municipio_id`, `estado_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orden_pago` (
    `orden_id` INTEGER NOT NULL AUTO_INCREMENT,
    `contrato_id` INTEGER NOT NULL,
    `fecha` DATE NULL,
    `monto_total` FLOAT NULL,

    UNIQUE INDEX `orden_id_UNIQUE`(`orden_id`),
    INDEX `fk_orden_pago_servicio_contrato1_idx`(`contrato_id`),
    PRIMARY KEY (`orden_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orden_pago_servicio` (
    `orden_id` INTEGER NOT NULL,
    `observaciones` VARCHAR(100) NULL,
    `servicio_id` INTEGER NULL,
    `cantidad` INTEGER NULL,
    `costo_unitario` VARCHAR(45) NULL,
    `monto_total` FLOAT NULL,

    UNIQUE INDEX `orden_id_UNIQUE`(`orden_id`),
    INDEX `fk_orden_pago_servicio_orden_pago1_idx`(`orden_id`),
    INDEX `fk_orden_pago_servicio_servicio_recurrente1_idx`(`servicio_id`),
    PRIMARY KEY (`orden_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicio_por_consumo` (
    `servicio_id` INTEGER NOT NULL AUTO_INCREMENT,
    `concepto` VARCHAR(150) NULL,
    `unidad_medida` VARCHAR(15) NULL,
    `costo` FLOAT NULL,

    UNIQUE INDEX `servicio_id_UNIQUE`(`servicio_id`),
    PRIMARY KEY (`servicio_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicio_por_evento` (
    `servicio_id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(150) NULL,
    `costo` FLOAT NULL,

    UNIQUE INDEX `servicio_id_UNIQUE`(`servicio_id`),
    PRIMARY KEY (`servicio_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicio_recurrente` (
    `servicio_id` INTEGER NOT NULL AUTO_INCREMENT,
    `concepto` VARCHAR(150) NULL,
    `periodicidad` INTEGER NULL,
    `costo` FLOAT NULL,

    UNIQUE INDEX `servicio_id_UNIQUE`(`servicio_id`),
    PRIMARY KEY (`servicio_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `toma_hidraulica` (
    `toma_hidraulica_id` VARCHAR(15) NOT NULL,
    `latitud` VARCHAR(20) NULL,
    `longitud` VARCHAR(20) NULL,
    `direccion_id` INTEGER NOT NULL,
    `medidor_id` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `toma_hidraulica_id_UNIQUE`(`toma_hidraulica_id`),
    INDEX `fk_toma_hidraulica_direccion1_idx`(`direccion_id`),
    INDEX `fk_toma_hidraulica_medidor1_idx`(`medidor_id`),
    PRIMARY KEY (`toma_hidraulica_id`, `direccion_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `usuario_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(75) NOT NULL,
    `ap_paterno` VARCHAR(100) NULL,
    `ap_materno` VARCHAR(100) NOT NULL,
    `email` VARCHAR(75) NULL,
    `telefono` VARCHAR(30) NULL,
    `fecha_nacimiento` DATE NULL,
    `presento_inapan` TINYINT NULL,
    `url_inapan_img` VARCHAR(255) NULL,
    `presento_ine` TINYINT NULL,
    `url_ine_img` VARCHAR(255) NULL,

    UNIQUE INDEX `titular_id_UNIQUE`(`usuario_id`),
    PRIMARY KEY (`usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `calle` ADD CONSTRAINT `fk_calle_colonia1` FOREIGN KEY (`colonia_id`) REFERENCES `colonia`(`colonia_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `colonia` ADD CONSTRAINT `fk_colonia_localidad1` FOREIGN KEY (`localidad_id`) REFERENCES `localidad`(`localidad_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `contrato` ADD CONSTRAINT `fk_contrato_toma_hidraulica1` FOREIGN KEY (`toma_hidraulica_id`) REFERENCES `toma_hidraulica`(`toma_hidraulica_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `contrato_usuario` ADD CONSTRAINT `fk_contrato_has_titular_contrato1` FOREIGN KEY (`contrato_id`) REFERENCES `contrato`(`contrato_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `contrato_usuario` ADD CONSTRAINT `fk_contrato_has_titular_titular1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`usuario_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `direccion` ADD CONSTRAINT `fk_direccion_calle1` FOREIGN KEY (`calle_id`) REFERENCES `calle`(`calle_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `lectura_medidor` ADD CONSTRAINT `fk_lectura_medidor_medidor1` FOREIGN KEY (`medidor_id`) REFERENCES `medidor`(`medidor_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `localidad` ADD CONSTRAINT `fk_localidad_municipio1` FOREIGN KEY (`municipio_id`) REFERENCES `municipio`(`municipio_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `municipio` ADD CONSTRAINT `fk_municipio_estado` FOREIGN KEY (`estado_id`) REFERENCES `estado`(`estado_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orden_pago` ADD CONSTRAINT `fk_orden_pago_servicio_contrato1` FOREIGN KEY (`contrato_id`) REFERENCES `contrato`(`contrato_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orden_pago_servicio` ADD CONSTRAINT `fk_orden_pago_servicio_orden_pago1` FOREIGN KEY (`orden_id`) REFERENCES `orden_pago`(`orden_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orden_pago_servicio` ADD CONSTRAINT `fk_orden_pago_servicio_servicio_por_consumo1` FOREIGN KEY (`servicio_id`) REFERENCES `servicio_por_consumo`(`servicio_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orden_pago_servicio` ADD CONSTRAINT `fk_orden_pago_servicio_servicio_por_evento1` FOREIGN KEY (`servicio_id`) REFERENCES `servicio_por_evento`(`servicio_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orden_pago_servicio` ADD CONSTRAINT `fk_orden_pago_servicio_servicio_recurrente1` FOREIGN KEY (`servicio_id`) REFERENCES `servicio_recurrente`(`servicio_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `toma_hidraulica` ADD CONSTRAINT `fk_toma_hidraulica_direccion1` FOREIGN KEY (`direccion_id`) REFERENCES `direccion`(`direccion_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `toma_hidraulica` ADD CONSTRAINT `fk_toma_hidraulica_medidor1` FOREIGN KEY (`medidor_id`) REFERENCES `medidor`(`medidor_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

