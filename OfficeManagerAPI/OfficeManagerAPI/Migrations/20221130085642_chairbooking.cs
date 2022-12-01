using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagerAPI.Migrations
{
    public partial class chairbooking : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChairBooking_Chairs_ChairId",
                table: "ChairBooking");

            migrationBuilder.DropForeignKey(
                name: "FK_ChairBooking_Users_UserId",
                table: "ChairBooking");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ChairBooking",
                table: "ChairBooking");

            migrationBuilder.RenameTable(
                name: "ChairBooking",
                newName: "ChairBookings");

            migrationBuilder.RenameIndex(
                name: "IX_ChairBooking_UserId",
                table: "ChairBookings",
                newName: "IX_ChairBookings_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_ChairBooking_ChairId",
                table: "ChairBookings",
                newName: "IX_ChairBookings_ChairId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ChairBookings",
                table: "ChairBookings",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ChairBookings_Chairs_ChairId",
                table: "ChairBookings",
                column: "ChairId",
                principalTable: "Chairs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChairBookings_Users_UserId",
                table: "ChairBookings",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChairBookings_Chairs_ChairId",
                table: "ChairBookings");

            migrationBuilder.DropForeignKey(
                name: "FK_ChairBookings_Users_UserId",
                table: "ChairBookings");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ChairBookings",
                table: "ChairBookings");

            migrationBuilder.RenameTable(
                name: "ChairBookings",
                newName: "ChairBooking");

            migrationBuilder.RenameIndex(
                name: "IX_ChairBookings_UserId",
                table: "ChairBooking",
                newName: "IX_ChairBooking_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_ChairBookings_ChairId",
                table: "ChairBooking",
                newName: "IX_ChairBooking_ChairId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ChairBooking",
                table: "ChairBooking",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ChairBooking_Chairs_ChairId",
                table: "ChairBooking",
                column: "ChairId",
                principalTable: "Chairs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChairBooking_Users_UserId",
                table: "ChairBooking",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
