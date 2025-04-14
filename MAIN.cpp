// Movie Ticket Booking System - ABHIJEET , VAAMAN , PRATYUSH , RIDHI

#include <iostream>
#include <fstream>
#include <string>
using namespace std;

// We defined User class for admin and Customer
class User {
protected:
    int id;
    string name;
    string role;
public:
    User(int userId, string userName, string userRole) {
        id = userId;
        name = userName;
        role = userRole;
    }
    void displayInfo() {
        cout << "User ID: " << id << ", Name: " << name << ", Role: " << role << endl;
    }
};

//Admin work is here that is adding movie and booking details...
class Admin : public User {
public:
    Admin(int userId, string userName) : User(userId, userName, "Admin") {}
    void addMovie(string title, string timing, double price) {
        ofstream file("Movies.txt", ios::app);
        if (file) {
            file << title << " | Timing: " << timing << " | Price: " << price << endl;
            cout << "Movie '" << title << "' with timing '" << timing << "' and price '" << price << "' added successfully!" << endl;
        }
    }
};

//We also made a seat management....added feature
bool isSeatAvailable(int seatNum) {
    ifstream file("Seats.txt");
    int seat;
    while (file >> seat) {
        if (seat == seatNum) return false;
    }
    return true;
}

void bookSeat(int seatNum) {
    ofstream file("Seats.txt", ios::app);
    file << seatNum << endl;
}

class Customer : public User {
public:
    Customer(int userId, string userName) : User(userId, userName, "Customer") {}

    void viewMovies() {
        ifstream file("Movies.txt");
        string movie;
        cout << "Available Movies:" << endl;
        while (getline(file, movie)) {
            cout << "- " << movie << endl;
        }
    }

    void bookTicket(string movie, int seatNum, string timing, bool popcorn, double price) {
        if (!isSeatAvailable(seatNum)) {
            cout << "Seat " << seatNum << " is already booked!" << endl;
            return;
        }
        bookSeat(seatNum);
        double totalPrice = price + (popcorn ? 50 : 0); // Popcorn costs an additional 50 rupees as per us..
        cout << "Total price: Rs." << totalPrice << endl;
        cout << "Enter payment amount: ";
        double payment;
        cin >> payment;
        if (payment >= totalPrice) {
            ofstream file("Bookings.txt", ios::app);
            file << name << " booked: " << movie << " | Seat: " << seatNum << " | Timing: " << timing << " | Popcorn: " << (popcorn ? "Yes" : "No") << " | Total Price: " << totalPrice << endl;
            cout << "Payment successful! Change: Rs." << payment - totalPrice << endl;
        } else {
            cout << "Insufficient payment!" << endl;
        }
    }

    void viewBookings() {
        ifstream file("Bookings.txt");
        string line;
        cout << "Your Bookings:" << endl;
        while (getline(file, line)) {
            if (line.find(name) != string::npos) {
                cout << line << endl;
            }
        }
    }
};

int main() {
    Admin admin(1, "AdminUser");
    Customer customer(2, "CustomerUser");
    int choice;
    cout << "1. Add Movie with Timing and Price (Admin)\n2. View Movies (Customer)\n3. Book Ticket with Seat, Timing, Popcorn, and Payment\n4. View Bookings\nChoose an option: ";
    cin >> choice;
    cin.ignore();

    if (choice == 1) {
        string title, timing;
        double price;
        cout << "Enter movie title: ";
        getline(cin, title);
        cout << "Enter show timing: ";
        getline(cin, timing);
        cout << "Enter ticket price: Rs.";
        cin >> price;
        admin.addMovie(title, timing, price);
    } else if (choice == 2) {
        customer.viewMovies();
    } else if (choice == 3) {
        string movie, timing;
        int seatNum;
        char popcornChoice;
        bool popcorn;
        double price;
        cout << "Enter movie title to book: ";
        cin>>movie;
        cout << "Enter seat number: ";
        cin >> seatNum;
        cin.ignore();
        cout << "Enter show timing: ";
        cin>>timing;
        cout << "Enter ticket price: Rs.";
        cin >> price;
        cout << "Do you want popcorn? (y/n): ";
        cin >> popcornChoice;
        popcorn = (popcornChoice == 'y' || popcornChoice == 'Y');
        customer.bookTicket(movie, seatNum, timing, popcorn, price);
    } else if (choice == 4) {
        customer.viewBookings();
    } else {
        cout << "Invalid choice!" << endl;
    }
    return 0;
}

