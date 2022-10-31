// Usings to work with EntityFramework
using Microsoft.EntityFrameworkCore;
using OfficeManagerAPI.DBAccess;

var builder = WebApplication.CreateBuilder(args);

// Connection with SQL Server Express
const string CONNECTIONNAME = "OfficeDB";
var connectionString = builder.Configuration.GetConnectionString(CONNECTIONNAME);

// 3. Add context
builder.Services.AddDbContext<OfficeDBContext>(options => options.UseSqlServer(connectionString));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configuration Cores 
var provider = builder.Services.BuildServiceProvider();
var configuration = provider.GetRequiredService<IConfiguration>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CorsPolicy", builder =>
    {
        builder.AllowAnyOrigin();
        builder.AllowAnyMethod();
        builder.AllowAnyHeader();
    });
}
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("CorsPolicy");
    
app.UseAuthorization();

app.MapControllers();

app.Run();
