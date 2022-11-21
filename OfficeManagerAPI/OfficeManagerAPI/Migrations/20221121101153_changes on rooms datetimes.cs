using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagerAPI.Migrations
{
    public partial class changesonroomsdatetimes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "StartTime",
                table: "Bookings",
                type: "datetime",
                nullable: true,
                oldClrType: typeof(TimeSpan),
                oldType: "time(7)",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "EndTime",
                table: "Bookings",
                type: "datetime",
                nullable: true,
                oldClrType: typeof(TimeSpan),
                oldType: "time(7)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<TimeSpan>(
                name: "StartTime",
                table: "Bookings",
                type: "time(7)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime",
                oldNullable: true);

            migrationBuilder.AlterColumn<TimeSpan>(
                name: "EndTime",
                table: "Bookings",
                type: "time(7)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime",
                oldNullable: true);
        }
    }
}
