using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagerAPI.Migrations
{
    public partial class Bookigdatetimeuppercas : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "dateTime",
                table: "Bookings",
                newName: "DateTime");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateTime",
                table: "Bookings",
                newName: "dateTime");
        }
    }
}
