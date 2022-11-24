using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagerAPI.Migrations
{
    public partial class removeddescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "ChairBooking");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "RoomBookings",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "RoomBookings",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "ChairBooking",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
