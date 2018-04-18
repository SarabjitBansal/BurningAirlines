User.destroy_all
u1 = User.create :email => 'ben@ga.co'
u2 = User.create :email => 'sam@ga.co'
u3 = User.create :email => 'anna@ga.co'

Airplane.destroy_all
a1 = Airplane.create(:name => 'B700', :rows => '4', :columns => '10', :total_seats => '40')
a2 = Airplane.create(:name => 'B710', :rows => '4', :columns => '12', :total_seats => '48')
a3 = Airplane.create(:name => 'B720', :rows => '4', :columns => '14', :total_seats => '56')

Flights.destroy_all
f1 = Flight.create(:flight_no => '25', :origin => 'Sydney', :destination => 'Brisbane', :date => '2018-07-22', :avail_seats => '20')
f2 = Flight.create(:flight_no => '30', :origin => 'Perth', :destination => 'Darwin', :date => '2018-05-19', :avail_seats => '34')
f3 = Flight.create(:flight_no => '35', :origin => 'Melborne', :destination => 'Cairns', :date => '2018-06-02', :avail_seats => '4')

#Airplanes and Flights
a1.flights << f1
a2.flights << f2
a3.flights << f3
