function Decoder(bytes, port) {
    
    var decoded = {};
    decoded.status = bytes[0] & (1 << 0);
    decoded.battery_voltage = (25 + (bytes[1] & 0x0F)) / 10;
    decoded.battery_remaining_capacity = 100 * ((bytes[1] >> 4) / 15);
    decoded.temperature = (bytes[2] & 0x7F) - 32;
    decoded.time_elapsed = (bytes[4] << 8) | bytes[3];
    decoded.event_counter = (bytes[7] << 16) | (bytes[6] << 8) | bytes[5];
    
    return decoded;
}