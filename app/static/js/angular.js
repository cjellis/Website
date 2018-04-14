/**
 * Created by Craig Ellis on 4/19/14.
 */
var module = angular.module('angular', []);

module.controller('bodyController', [ '$scope', '$http', function ($scope, $http) {
    $scope.teams = [
        {'team': 'Boston RedSox', 'url':'http://boston.redsox.mlb.com/index.jsp?c_id=bos'},
        {'team': 'Boston Bruins', 'url':'http://bruins.nhl.com/'},
        {'team': 'New England Revolution', 'url':'http://www.revolutionsoccer.net/'},
        {'team': 'Northeastern Huskies', 'url':'http://www.gonu.com/'},
        {'team': 'New England Patriots', 'url':'http://www.patriots.com/'}
    ];

    $scope.computer = [
        {"part":'Cooler Master Elite Mid Tower Case'},
        {"part":'ECS Motherboard(USB 3.0, SATA III, Gigabit LAN)'},
        {"part":'Corsair DDR3 8GB Memory'},
        {"part":'500 GB Seagate Barracuda 7200 RPM Drive'},
        {"part":'Antec 450W Power Supply'},
        {"part":'250 GB Intel Solid-State 520 Series'},
        {"part":'Intel i7-3770K Processor(Quad Core)'},
        {"part":'2 120mm Blue LED Fans'},
        {"part":'EVGA GeForce GT 630 1024MB GDDR5 Graphics Card'},
        {"part":'Razer 2014 BlackWidow Mechanical Gaming Keyboard Stealth Edition'},
        {"part":'Razer Naga Hex mouse'},
        {"part":'Turtle Beach X12 Gaming Headset'}
    ];

    $scope.classes = [
        {"name": 'Wireless Networks'},
        {"name": 'Network Security'},
        {"name": 'Software Vulnerabilities and Security'},
        {"name": 'Foundations of Information Assurance'},
        {"name": 'Network Fundamentals'},
        {"name": 'Algorithms and Data'},
        {"name": 'Software Development'},
        {"name": 'Theory of Computation'},
        {"name": 'Programming Languages'},
        {"name": 'Systems and Networks'},
        {"name": 'Computer Organization'},
        {"name": 'Object Oriented Design'},
        {"name": 'Linear Algebra'},
        {"name": 'Probability and Statistics'},
        {"name": 'Logic and Computation'},
        {"name": 'Discrete Structures'},
        {"name": 'Fundamentals of CS 2'},
        {"name": 'Fundamentals of CS 1'},
        {"name": 'Physics 2'},
        {"name": 'Physics 1'}
    ];

    $scope.gradclasses = [
        {"name": 'Wireless Networks'},
        {"name": 'Network Security'},
        {"name": 'Software Vulnerabilities and Security'},
        {"name": 'Database Management'},
        {"name": 'Game Artificial Intelligence'}
    ];

    $scope.past = [

    ];

    $scope.current = [
    ];

    $scope.upcoming = [
    ];

}]);