User.destroy_all
u1 = User.create :email => 'ben@ga.co'
u2 = User.create :email => 'sam@ga.co'
u3 = User.create :email => 'anna@ga.co'

Airplane.destroy_all
a1 = Airplane.create(:name => 'Singapore Airlines', :rows => '80', :columns => '4', :total_seats => '320')
a2 = Airplane.create(:name => 'Virgin Airlines', :rows => '60', :columns => '4', :total_seats => '240')
a3 = Airplane.create(:name => 'Qantas', :rows => '100', :columns => '4', :total_seats => '400')

Flight.destroy_all
f1 = Flight.create(:flight_no => 'SB', :origin => 'Sydney', :destination => 'Brisbane', :date => '22/07/18', :avail_seats => '20')
f2 = Flight.create(:flight_no => 'PD', :origin => 'Perth', :destination => 'Darwin', :date => '19/05/17', :avail_seats => '34')
f3 = Flight.create(:flight_no => 'MC', :origin => 'Melborne', :destination => 'Cairns', :date => '02/01/18', :avail_seats => '4')



#Airplanes and Flights
a1.flights << f1
a2.flights << f2
a3.flights << f3
