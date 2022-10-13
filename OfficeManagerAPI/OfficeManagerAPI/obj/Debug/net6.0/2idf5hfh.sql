IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Chairs] (
    [Id] int NOT NULL IDENTITY,
    [Aviable] bit NOT NULL,
    [Room_Id] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_Chairs] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Users] (
    [StudentId] int NOT NULL IDENTITY,
    [Name] nvarchar(50) NOT NULL,
    [LastName] nvarchar(50) NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    [Passw] nvarchar(100) NOT NULL,
    [CreatedBy] nvarchar(max) NOT NULL,
    [CreatedAt] datetime2 NOT NULL,
    [UpdatedBy] nvarchar(max) NOT NULL,
    [UpdatedAt] datetime2 NULL,
    [DelatedBy] nvarchar(max) NOT NULL,
    [DelatedAt] datetime2 NULL,
    [IsDeleted] bit NOT NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY ([StudentId])
);
GO

CREATE TABLE [Zone] (
    [ZoneId] int NOT NULL IDENTITY,
    CONSTRAINT [PK_Zone] PRIMARY KEY ([ZoneId])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20221013085558_first migration', N'6.0.9');
GO

COMMIT;
GO

