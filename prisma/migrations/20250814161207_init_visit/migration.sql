-- CreateTable
CREATE TABLE `Visit` (
    `id` VARCHAR(191) NOT NULL,
    `sectionId` VARCHAR(191) NOT NULL,
    `country` VARCHAR(100) NULL,
    `city` VARCHAR(100) NULL,
    `ipAddress` VARCHAR(45) NULL,
    `userAgent` VARCHAR(512) NULL,
    `duration` INTEGER NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    INDEX `Visit_sectionId_idx`(`sectionId`),
    INDEX `Visit_createdAt_idx`(`createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
