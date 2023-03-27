'use strict';

const net = require('net');

class TelnetServer
{
  /**
   * @param {object}   streamOpts options for the stream @see TelnetSocket
   * @param {function} listener   connected callback
   */
  constructor(listener) {
    this.netServer = net.createServer({}, (socket) => {
      socket.fresh = true;
      listener(socket);
    });
  }
}

module.exports = TelnetServer;